import React from "react";
import { useDocumentTitle } from "utils";
import { CardContent, CardTitle, Title } from "components/lib";
import { Button, Image, Grid, AutoCenter } from "antd-mobile";
import { List } from "screens/child-task/list";
import { useChildTasks } from "utils/task";
import "./task.css";
import styled from "@emotion/styled";
import leftArrowSrc from "assets/left-arrow.png";
import { useChildTasksSearchParams, useTaskInUrl } from "./util";

export const ChildTasksScreen = () => {
  useDocumentTitle("事项分类子项", false);
  const taskId = useChildTasksSearchParams().taskId;
  const childTaskList = useChildTasks(taskId).data;
  const goBackPage = () => {
    window.history.back();
  };
  return (
    <div className="child-task">
      <CardTitle>
        <Button
          className="return-box"
          block
          shape="rounded"
          color="primary"
          onClick={goBackPage}
        >
          <Grid columns={3} gap={8}>
            <Grid.Item>
              <AutoCenter>
                <Image
                  src={leftArrowSrc}
                  width={"4vw"}
                  height={"4vh"}
                  fit="contain"
                />
              </AutoCenter>
            </Grid.Item>
            <Grid.Item span={2}>
              <div className="return-text">返回</div>
            </Grid.Item>
          </Grid>
        </Button>
        <Title> xxxxxx村社区——保险服务</Title>
      </CardTitle>
      <CardContentBox>
        <List tasks={childTaskList || []} />
      </CardContentBox>
    </div>
  );
};
const CardContentBox = styled(CardContent)`
  position: relative;
  justify-content: center;
  padding-top: 4vh;
`;
