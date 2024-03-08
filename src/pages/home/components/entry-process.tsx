import React from "react"
import styled from "@emotion/styled"
import "./styles/entry-process.css"
import { TitleBox } from "components/lib"
// 入驻流程
export const EntryProcessPart = (props: any) => {
  return (
    <EntryProcessContainer>
      <EntryProcessContent>
        <TitleBox name="入驻流程" />
        <div className="process-list">
          <ProcessItem />
          <ProcessItem />
          <ProcessItem />
          <ProcessItem index={3} />
        </div>
      </EntryProcessContent>
    </EntryProcessContainer>
  )
}
const ProcessItem = (props: any) => {
  return (
    <div className="process-item-container">
      <div className="process-item">
        <div
          className={props.index === 3 ? "process-dot no-line" : "process-dot"}
        ></div>
        <div className="process-description">
          <p className="step-name">第一步 填写资质信息</p>
          <p className="time-coverage">约30分钟</p>
          <span>登录后提交营业执照、法人/经营者身份证明、 店铺logo等</span>
        </div>
      </div>
    </div>
  )
}
const EntryProcessContainer = styled.div`
  margin: auto;
  width: 1200px;
  background: #fff;
  margin-bottom: 40px;
`
const EntryProcessContent = styled.div`
  padding: 40px 0;
  margin: auto;
  width: 1200px;
`
