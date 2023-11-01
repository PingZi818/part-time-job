import React from "react"
import { Route, Routes } from "react-router"
import { TasksScreen } from "screens/tasks"
import { ChildTasksScreen } from "screens/child-task"
import { StepScreen } from "screens/step"
import LayoutBox from "components/layout"

export default function AuthenticatedApp() {
  return (
    <LayoutBox
      content={
        <Routes>
          <Route path={"tasks"} element={<TasksScreen />} />
          <Route path={"tasks/:taskId/*"} element={<ChildTasksScreen />} />
          <Route
            path={"tasks/:taskId/step/:businessId/*"}
            element={<StepScreen />}
          />
          <Route index element={<TasksScreen />} />
        </Routes>
      }
    ></LayoutBox>
  )
}
