import React from "react";
import {
  ImgBox,
  LoginLogoBox,
  ShadowCard,
  ScreenContainer,
} from "components/lib";
import { Route, Routes } from "react-router";
import { TasksScreen } from "screens/tasks";
import { ChildTasksScreen } from "screens/child-task";
import { StepScreen } from "screens/step";

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
          <Route path={"tasks"} element={<TasksScreen />} />
          <Route path={"tasks/:taskId/*"} element={<ChildTasksScreen />} />
          <Route
            path={"tasks/:taskId/step/:businessId/*"}
            element={<StepScreen />}
          />
          <Route index element={<TasksScreen />} />
        </Routes>
      </ShadowCard>
    </ScreenContainer>
  );
}
