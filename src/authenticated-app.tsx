import React from "react";
import styled from "@emotion/styled";
import {
  ImgBox,
  LoginLogoBox,
  ShadowCard,
  ScreenContainer,
} from "components/lib";
import { Route, Routes } from "react-router";
import { TasksScreen } from "screens/tasks";

export default function AuthenticatedApp() {
  return (
    <ScreenContainer>
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
        <Routes>
          <Route path={"projects"} element={<TasksScreen />} />
          <Route path={"projects/:projectId/*"} element={<TasksScreen />} />
          <Route index element={<TasksScreen />} />
        </Routes>
      </ShadowCard>
    </ScreenContainer>
  );
}

const Main = styled.main`
  display: flex;
  overflow: hidden;
`;
