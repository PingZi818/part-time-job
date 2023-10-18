import React from "react";
import { useDocumentTitle } from "utils";
import { useTasks } from "utils/task";
import { CardContent, CardTitle, Title } from "components/lib";
import { List } from "screens/tasks/list";
import "./task.css";
import styled from "@emotion/styled";
export const TasksScreen = () => {
  useDocumentTitle("事项分类", false);
  const { isLoading, data: list } = useTasks();
  return (
    <>
      <CardTitle>
        <Title>xxxxxx村社区取号系统</Title>
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
