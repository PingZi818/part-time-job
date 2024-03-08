import React, { ReactNode, useCallback } from "react"
import * as auth from "auth-provider"
import { useMount } from "utils"
import { useAsync } from "utils/use-async"
import { FullPageErrorFallback, FullPageLoading } from "components/lib"
import { User } from "types/user"
import { useQueryClient } from "react-query"

interface AuthForm {
  userName: string
  userPassword: string
}

const bootstrapUser = async () => {
  const user = await auth.getUser()
  return user
}

const AuthContext = React.createContext<
  | {
      user: User | null
      login: (form: AuthForm) => Promise<void>
      logout: () => Promise<void>
    }
  | undefined
>(undefined)
AuthContext.displayName = "AuthContext"

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    run,
    setData: setUser,
  } = useAsync<User | null>()
  const queryClient = useQueryClient()
  // point free
  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const logout = () =>
    auth.logout().then(() => {
      setUser(null)
      queryClient.clear()
    })

  useMount(
    useCallback(() => {
      run(bootstrapUser())
    }, [run])
  )

  if (isIdle || isLoading) {
    return <FullPageLoading />
  }

  if (isError) {
    return <FullPageErrorFallback error={error} />
  }

  return (
    <AuthContext.Provider children={children} value={{ user, login, logout }} />
  )
}

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用")
  }
  return context
}
