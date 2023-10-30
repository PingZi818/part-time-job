import React, { useState } from "react";
import { LoginScreen } from "unauthenticated-app/login";
import { Button } from "antd-mobile";
import styled from "@emotion/styled";
import leftBg from "assets/left-bg.png";
import { useDocumentTitle } from "utils";
import { CardContent, CardTitle, Title } from "components/lib";
import LayoutBox from "components/layout";

export default function UnauthenticatedApp() {
  const [error, setError] = useState<Error | null>(null);

  useDocumentTitle("取号管理系统");

  return (
    <LayoutBox
      content={
        <div className="login-container">
          <CardTitle>
            <Title>取号管理系统</Title>
          </CardTitle>
          <CardContentBox>
            <BgLeft></BgLeft>
            <LoginBox>
              <LoginBoxContent>
                <LoginScreen onError={setError} />
              </LoginBoxContent>
            </LoginBox>
          </CardContentBox>
        </div>
      }
    ></LayoutBox>
  );
}

export const LongButton = styled(Button)`
  width: 100%;
`;
const CardContentBox = styled(CardContent)`
  padding-left: 3vw;
`;
const BgLeft = styled.div`
  width: 33vw;
  height: 39vh;
  text-align: center;
  background: url(${leftBg}) no-repeat center;
  background-size: contain;
`;
const LoginBox = styled.div`
  width: 34vw;
  height: 46vh;
  margin-left: 1.5vw;
  text-align: center;
`;
const LoginBoxContent = styled.div`
  max-width: 65.4rem;
  height: 30vh;
  text-align: center;
`;
