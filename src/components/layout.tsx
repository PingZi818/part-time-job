import React from "react";
import { Button, Card } from "antd";
import styled from "@emotion/styled";
import loginBg from "assets/login-bg.png";
import loginLogo from "assets/login-logo.png";
import loginContentBg from "assets/login-content.png";

export default function LayoutBox() {
  return (
    <Container>
      <LoginLogoBox>
        <ImgBox />
      </LoginLogoBox>
      <ShadowCard
        bodyStyle={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <slot />
      </ShadowCard>
    </Container>
  );
}
export const LongButton = styled(Button)`
  width: 100%;
`;

const LoginLogoBox = styled.div`
  width: 100%;
  text-align: right;
`;

const ImgBox = styled.div`
  width: 45.4rem;
  display: inline-block;
  height: 7vh;
  margin-right: 4.1rem;
  background: url(${loginLogo}) no-repeat center;
  background-size: contain;
`;

const ShadowCard = styled(Card)`
  width: 83vw;
  height: 75vh;
  margin: auto;
  margin-top: 2rem;
  border-radius: 1.5rem;
  border: none;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
  background: url(${loginContentBg}) no-repeat center;
  background-size: cover;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${loginBg}) no-repeat center;
  background-size: cover;
  width: 100%;
  padding-top: 2rem;
`;
