import React from "react"
import "./App.css"
// import { useAuth } from "context/auth-context"
import { ErrorBoundary } from "components/error-boundary"
import { FullPageErrorFallback, FullPageLoading } from "components/lib"
import AuthenticatedApp from "authenticated-app"
import { ConfigProvider } from "antd"

// const UnauthenticatedApp = React.lazy(() => import("unauthenticated-app"))

function App() {
  // const { user } = useAuth()
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token，影响范围大
          colorPrimary: "#21468C",
          borderRadius: 2,
          fontSize: 16,
          // 派生变量，影响范围小
          colorBgContainer: "#fff",
        },
        components: {
          Layout: {
            headerBg: "#21468C",
            footerBg: "#21468C",
          },
          Menu: {
            darkItemBg: "#21468C",
          },
          Button: {
            colorPrimary: "#21468C",
            algorithm: true, // 启用算法
          },
          Input: {
            colorPrimary: "#eb2f96",
            algorithm: true, // 启用算法
          },
        },
      }}
    >
      <div className="App">
        <ErrorBoundary fallbackRender={FullPageErrorFallback}>
          <React.Suspense fallback={<FullPageLoading />}>
            <AuthenticatedApp />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </ConfigProvider>
  )
}

export default App
