import React, { useState } from "react"
import { useDocumentTitle } from "utils"
import { CardContent, CardTitle, Title } from "components/lib"
import { Button, Image, Grid, AutoCenter } from "antd-mobile"
import { List } from "screens/child-task/list"
import "./task.css"
import styled from "@emotion/styled"
import prevStepSrc from "assets/prev-step.png"
import homeSrc from "assets/home.png"
import { useTaskInUrl } from "./util"
import { useNavigate } from "react-router-dom"
import FooterText from "components/footer"
import { useInterval } from "screens/step/util"

export const ChildTasksScreen = () => {
  const { data: currentTask, isLoading } = useTaskInUrl()
  const { kindName, businessList } = { ...currentTask }
  useDocumentTitle("取号管理系统", false)
  const goBackPage = () => {
    window.history.back()
  }
  const navigate = useNavigate()
  const goHomePage = () => {
    // 点击返回首页
    navigate("/")
  }
  const [num, setNum] = useState(120)
  useInterval(
    () => {
      setNum(num - 1)
      if (num === 0) {
        goHomePage()
      }
    },
    num === -1 ? null : 1000
  )
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
          <div className="btn-with-icon">
            <AutoCenter>
              <Image
                src={prevStepSrc}
                width={"2vw"}
                height={"4vh"}
                fit="contain"
              />
            </AutoCenter>
            <div className="btn-text">返回</div>
          </div>
        </Button>
        <Button
          className="child-task-home-btn"
          block
          color="primary"
          onClick={goHomePage}
        >
          <div className="btn-with-icon">
            <AutoCenter>
              <Image src={homeSrc} width={"2vw"} height={"4vh"} fit="contain" />
            </AutoCenter>
            <div className="btn-text">首页</div>
          </div>
        </Button>
      </CardContentFooter>
      <FooterText time={num} />
    </div>
  )
}
const CardContentBox = styled(CardContent)`
  flex: 1;
  position: relative;
  justify-content: center;
  padding-top: 4vh;
`
const CardContentFooter = styled(CardContent)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  padding-top: 4vh;
  height: 100px;
  padding: 0 40px;
  margin-bottom: 2vh;
  align-items: start;
`
