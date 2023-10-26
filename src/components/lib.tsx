import styled from "@emotion/styled";
import React from "react";
import zhCN from "antd-mobile/es/locales/zh-CN";
import {
  Button,
  Card,
  AutoCenter,
  ErrorBlock,
  ConfigProvider,
  SpinLoading,
} from "antd-mobile";
import loginLogo from "assets/login-logo.png";
import loginContentBg from "assets/login-content.png";
export const Row = styled.div<{
  gap?: number | boolean;
  between?: boolean;
  marginBottom?: number;
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
`;

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FullPageLoading = () => (
  <FullPage>
    <SpinLoading />
  </FullPage>
);

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
);

// 类型守卫
const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return (
      <ConfigProvider locale={zhCN}>
        {/* <ErrorBlock status='disconnected' /> */}
        {error}
      </ConfigProvider>
    );
  }
  return null;
};

export const ButtonNoPadding = styled(Button)`
  padding: 0;
`;

export const Title = styled(AutoCenter)`
  padding: 1.5rem 0;
  color: rgb(255, 255, 255);
  font-size: 48px;
  font-weight: bold;
`;
export const LogoTitle = styled(AutoCenter)`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
`;
export const CardTitle = styled.div`
  height: 12vh;
  padding: 0 4rem;
  position: relative;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
`;
export const CardContent = styled.div`
  display: flex;
  text-align: center;
  display: flex;
  align-items: center;
  height: 100%;
`;
export const LoginLogoBox = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  text-align: left;
`;

export const ImgBox = styled.div`
  width: 45.4rem;
  display: inline-block;
  height: 7vh;
  margin-right: 1rem;
  background: url(${loginLogo}) no-repeat center;
  background-size: contain;
`;

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
`;
