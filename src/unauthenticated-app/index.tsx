import React, { useState } from "react"
// import { LoginScreen } from "unauthenticated-app/login"
import { Button } from "antd-mobile"
import styled from "@emotion/styled"
import leftBg from "assets/left-bg.png"
import { useDocumentTitle } from "utils"
// import { CardContent, CardTitle, Title } from "components/lib"
import LayoutBox from "components/layout"

export default function UnauthenticatedApp() {
  const [error, setError] = useState<Error | null>(null)

  useDocumentTitle("取号管理系统")

  return (
    <LayoutBox
      content={
        <div className="login-container">
          {/* <CardTitle>
            <Title>取号管理系统</Title>
          </CardTitle>
          <CardContentBox>
            <BgLeft></BgLeft>
            <LoginBox>
              <LoginBoxContent>
                <LoginScreen onError={setError} />
              </LoginBoxContent>
            </LoginBox>
          </CardContentBox> */}
        </div>
      }
    ></LayoutBox>
  )
}

export const LongButton = styled(Button)`
  width: 100%;
`
