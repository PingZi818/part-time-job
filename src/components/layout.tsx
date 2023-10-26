import React from "react";
import styled from "@emotion/styled";
import loginBg from "assets/login-bg.png";
import { Button } from "antd-mobile";
import { useAuth } from "context/auth-context";
import { ImgBox, LoginLogoBox, LogoTitle, ShadowCard, Title } from "./lib";
export default function LayoutBox(props: any) {
  const { user } = useAuth();
  return (
    <Container>
      <LoginLogoBox>
        <ImgBox />
        <LogoTitle>{user?.empName}</LogoTitle>
      </LoginLogoBox>
      <ShadowCard
        bodyStyle={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {props.content}
      </ShadowCard>
    </Container>
  );
}
export const LongButton = styled(Button)`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${loginBg}) no-repeat center;
  background-size: cover;
  width: 100%;
  padding-top: 2rem;
`;
