import React from "react"
import styled from "@emotion/styled"
import "./styles/entry-process.css"
import { TitleBox } from "components/lib"
import { useProcessList } from "api/home"
import { Process } from "types/home"
// 入驻流程
export const EntryProcessPart = (props: any) => {
  const { data: list } = useProcessList()
  return (
    <EntryProcessContainer>
      <EntryProcessContent>
        <TitleBox name="入驻流程" />
        <div className="process-list">
          {list?.map((item, i) => (
            <ProcessItem index={i} process={item} len={list.length} />
          ))}
        </div>
      </EntryProcessContent>
    </EntryProcessContainer>
  )
}
export const ProcessItem = ({
  process,
  index,
  len,
}: {
  process: Process
  index: number
  len: number
}) => {
  const numberToChinese = (num: number) => {
    const units = ["", "十", "百", "千", "万", "十万", "百万", "千万", "亿"]
    const digits = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"]
    let result = String(num).replace(/./g, function (digit, index, array) {
      return digits[Number(digit)] + units[array.length - index - 1]
    })
    return result
  }
  return (
    <div className="process-item-container">
      <div className="process-item">
        <div
          className={index === len - 1 ? "process-dot no-line" : "process-dot"}
        ></div>
        <div className="process-description">
          <p className="step-name">
            第{numberToChinese(index + 1)}步 {process.stepTitle}
          </p>
          <p className="time-coverage">{process.description}</p>
          <span>{process.secondDescription}</span>
        </div>
      </div>
    </div>
  )
}
const EntryProcessContainer = styled.div`
  margin: auto;
  width: 100%;
  background: #fff;
  margin-bottom: 40px;
`
const EntryProcessContent = styled.div`
  padding: 40px 0;
  margin: auto;
  width: 1200px;
`
