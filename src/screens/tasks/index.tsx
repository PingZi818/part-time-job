import React from "react";
import { useDocumentTitle } from "utils";
import { useMachineStatus, useTasks } from "utils/task";
import { CardContent, CardTitle, Title } from "components/lib";
import { List } from "screens/tasks/list";
import "./task.css";
import styled from "@emotion/styled";
export const TasksScreen = () => {
  useDocumentTitle("事项分类", false);
  const { isLoading, data: list } = useTasks();
  const { data: currentMachineStatus } = useMachineStatus();
  return (
    <>
      <CardTitle>
        <Title>村社区取号系统</Title>
        <div className="total-paper-num">
          剩余纸张数：{currentMachineStatus?.printerBalance}
        </div>
      </CardTitle>
      <CardContentBox>
        <List loading={isLoading} tasks={list || []} />
      </CardContentBox>
    </>
  );
};
const CardContentBox = styled(CardContent)`
  position: relative;
  justify-content: center;
  padding-top: 4vh;
`;
