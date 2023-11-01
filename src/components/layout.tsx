import React from "react";
import styled from "@emotion/styled";
import loginBg from "assets/login-bg.png";
import exitBgSrc from "assets/exit.png";
import { Button, Image } from "antd-mobile";
import { useAuth } from "context/auth-context";
import * as auth from "auth-provider";
import {
  ImgBox,
  LoginLogoBox,
  LogoTitle,
  ShadowCard,
  UserNameBox,
} from "./lib";
export default function LayoutBox(props: any) {
  const { user } = useAuth();
  const exitLogin = async () => {
    await auth.logout();
    window.location.reload();
    return Promise.reject({ message: "已退出登录" });
  };
  return (
    <Container>
      <LoginLogoBox>
        <LeftLoginBox>
          <ImgBox />
          <LogoTitle>{user?.communityName}</LogoTitle>
        </LeftLoginBox>
        {user ? (
          <ExitContainer>
            <UserNameBox>{user?.userName || ""}</UserNameBox>
            <Image
              className="exit-icon"
              onClick={() => exitLogin()}
              src={exitBgSrc}
              height={"4vh"}
              width={"4vh"}
              fit="contain"
            />
          </ExitContainer>
        ) : (
          ""
        )}
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
const LeftLoginBox = styled.div`
  display: flex;
  align-items: center;
`;
const ExitContainer = styled.div`
  position: relative;
  right: 3vw;
  overflow: hidden;
`;
