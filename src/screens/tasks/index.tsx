import React from "react";
import { useDebounce, useDocumentTitle } from "utils";
import { useTasks } from "utils/task";
import { CardContent, CardTitle, Title } from "components/lib";
import { useTasksSearchParams } from "./util";
import { List } from "screens/tasks/list";
import "./task.css";
import styled from "@emotion/styled";
export const TasksScreen = () => {
  useDocumentTitle("项目列表", false);

  // const { open } = useProjectModal();

  const [param, setParam] = useTasksSearchParams();
  const { isLoading, error, data: list } = useTasks(useDebounce(param, 200));

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
  justify-content: center;
`;
