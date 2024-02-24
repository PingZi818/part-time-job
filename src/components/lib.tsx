import styled from "@emotion/styled"
import React from "react"
import zhCN from "antd-mobile/es/locales/zh-CN"
import {
  Button,
  Card,
  AutoCenter,
  ErrorBlock,
  ConfigProvider,
  SpinLoading,
} from "antd-mobile"
import loginLogo from "assets/login-logo.png"
import loginContentBg from "assets/login-content.png"
export const Row = styled.div<{
  gap?: number | boolean
  between?: boolean
  marginBottom?: number
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FullPageLoading = () => (
  <FullPage>
    <SpinLoading />
  </FullPage>
)

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
)

// 类型守卫
const isError = (value: any): value is Error => value?.message

export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return (
      <ConfigProvider locale={zhCN}>
        {/* <ErrorBlock status='disconnected' /> */}
        {error}
      </ConfigProvider>
    )
  }
  return null
}
export const TitleBox = ({ name }: { name: string }) => {
  if (name) {
    return (
      <TitleB>
        <LeftLine></LeftLine>
        <TitleText>{name}</TitleText>
      </TitleB>
    )
  }
  return null
}
export const TitleB = styled.div`
  border-bottom: 1px solid #eef3fa;
  margin-bottom: 20px;
  overflow: hidden;
`
export const LeftLine = styled.div`
  float: left;
  background: #21468c;
  width: 4px;
  height: 18px;
  margin-top: 7px;
`
export const TitleText = styled.span`
  float: left;
  font-size: 16px;
  color: #333;
  line-height: 32px;
  padding: 0 0 10px 20px;
  font-weight: bold;
  font-size: 22px;
`
export const ButtonNoPadding = styled(Button)`
  padding: 0;
`

export const Title = styled.div`
  padding: 1.5rem 0;
  color: rgb(255, 255, 255);
  font-size: 4.4vh;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 10px;
`
export const LogoTitle = styled.div`
  color: #fff;
  font-size: 4.4vh;
  line-height: 4.4vh;
  font-weight: bold;
  height: 4.8vh;
`
export const UserNameBox = styled.div`
  color: #fff;
  font-size: 4.4vh;
  line-height: 4.4vh;
  font-weight: bold;
  height: 4.8vh;
  float: left;
`
export const CardTitle = styled.div`
  padding: 0 4rem;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`
export const CardContent = styled.div`
  display: flex;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
`
export const LoginLogoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
`

export const ImgBox = styled.div`
  width: 42vh;
  display: inline-block;
  height: 7vh;
  margin-left: 4vw;
  margin-right: 1rem;
  background: url(${loginLogo}) no-repeat center;
  background-size: contain;
`

export const ShadowCard = styled(Card)`
  width: 83vw;
  height: 75vh;
  margin: auto;
  margin-top: 2rem;
  padding: 0px !important;
  border-radius: 1.5rem;
  border: none;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
  background: url(${loginContentBg}) no-repeat center;
  background-size: cover;
`
