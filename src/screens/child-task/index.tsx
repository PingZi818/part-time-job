import React, { useState } from "react";
import { useDocumentTitle } from "utils";
import { CardContent, CardTitle, Title } from "components/lib";
import { Button, Image, Grid, AutoCenter } from "antd-mobile";
import { List } from "screens/child-task/list";
import "./task.css";
import styled from "@emotion/styled";
import prevStepSrc from "assets/prev-step.png";
import homeSrc from "assets/home.png";
import { useTaskInUrl } from "./util";
import { useNavigate } from "react-router-dom";
import FooterText from "components/footer";
import { useInterval } from "screens/step/util";

export const ChildTasksScreen = () => {
  const { data: currentTask, isLoading } = useTaskInUrl();
  const { kindName, businessList } = { ...currentTask };
  useDocumentTitle(kindName || "事项子分类", false);
  const goBackPage = () => {
    window.history.back();
  };
  const navigate = useNavigate();
  const goHomePage = () => {
    // 点击返回首页
    navigate("/");
  };
  const [num, setNum] = useState(120);
  useInterval(
    () => {
      setNum(num - 1);
      if (num === 0) {
        goHomePage();
      }
    },
    num === -1 ? null : 1000
  );
  return (
    <div className="child-task">
      <CardTitle>
        <Title className="child-task-title">{kindName}</Title>
      </CardTitle>
      <CardContentBox>
        <List loading={isLoading} tasks={businessList || []} />
      </CardContentBox>
      <CardContentFooter>
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
                  src={prevStepSrc}
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
        <Button
          className="child-task-home-btn"
          block
          color="primary"
          onClick={goHomePage}
        >
          <Grid columns={3} gap={8}>
            <Grid.Item>
              <AutoCenter>
                <Image
                  src={homeSrc}
                  width={"4vw"}
                  height={"4vh"}
                  fit="contain"
                />
              </AutoCenter>
            </Grid.Item>
            <Grid.Item span={2}>
              <div className="return-text">首页</div>
            </Grid.Item>
          </Grid>
        </Button>
      </CardContentFooter>
      <FooterText time={num} />
    </div>
  );
};
const CardContentBox = styled(CardContent)`
  flex: 1;
  position: relative;
  justify-content: center;
  padding-top: 4vh;
`;
const CardContentFooter = styled(CardContent)`
  justify-content: start;
  padding-top: 4vh;
  height: 100px;
  margin-bottom: 2vh;
`;
