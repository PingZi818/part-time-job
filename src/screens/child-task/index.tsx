import React from "react";
import { useDocumentTitle } from "utils";
import { CardContent, CardTitle } from "components/lib";
import { Button, Image, Grid, AutoCenter } from "antd-mobile";
import { List } from "screens/child-task/list";
import "./task.css";
import styled from "@emotion/styled";
import leftArrowSrc from "assets/left-arrow.png";
import { useTaskInUrl } from "./util";
import { useAuth } from "context/auth-context";

export const ChildTasksScreen = () => {
  const { user } = useAuth();
  useDocumentTitle("事项分类子项", false);
  const { data: currentTask } = useTaskInUrl();
  const { kindName, businessList } = { ...currentTask };
  const goBackPage = () => {
    window.history.back();
  };
  return (
    <div className="child-task">
      <CardTitle>
        <Grid columns={4} gap={8}>
          <Grid.Item>
            <Button
              className="child-task-return-box"
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
          </Grid.Item>
          <Grid.Item span={3}>
            <Title className="child-task-title">
              {" "}
              {user?.empName}——{kindName}
            </Title>
          </Grid.Item>
        </Grid>
      </CardTitle>
      <CardContentBox>
        <List tasks={businessList || []} />
      </CardContentBox>
    </div>
  );
};
export const Title = styled.div`
  padding: 1.5rem 0;
  color: rgb(255, 255, 255);
  font-size: 60px;
`;
const CardContentBox = styled(CardContent)`
  position: relative;
  justify-content: center;
  padding-top: 4vh;
`;
