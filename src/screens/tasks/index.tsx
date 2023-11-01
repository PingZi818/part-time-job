import React, { useEffect, useState } from "react"
import { useDocumentTitle } from "utils"
import { useMachineStatus, useTasks } from "utils/task"
import { CardContent, CardTitle, Title } from "components/lib"
import { List } from "screens/tasks/list"
import "./task.css"
import styled from "@emotion/styled"
import { useHttp } from "utils/http"
export const TasksScreen = () => {
  useDocumentTitle("取号管理系统", false)
  const { isLoading, data: list } = useTasks()
  const { data: currentMachineStatus } = useMachineStatus()
  let printerBalance = currentMachineStatus?.printerBalance || 0
  let printerWarning = currentMachineStatus?.printerWarning || false
  const client = useHttp()
  useEffect(() => {
    const getMachineStatus = async () => {
      const currentMachineStatus = await client("getMachineStatus", {
        data: {},
        method: "POST",
      })
      // eslint-disable-next-line react-hooks/exhaustive-deps
      printerBalance = currentMachineStatus?.printerBalance || 0
      // eslint-disable-next-line react-hooks/exhaustive-deps
      printerWarning = currentMachineStatus?.printerWarning || false
      return currentMachineStatus
    }
    const interval = setInterval(() => {
      getMachineStatus()
    }, 20000)
    return () => clearInterval(interval)
  }, [client])
  return (
    <>
      <CardTitle>
        <Title>村社区取号系统</Title>
        <div className={`total-paper-num ${printerWarning && "red-color"}`}>
          剩余纸张数：{printerBalance}
        </div>
      </CardTitle>
      <CardContentBox>
        <List loading={isLoading} tasks={list || []} />
      </CardContentBox>
    </>
  )
}
const CardContentBox = styled(CardContent)`
  position: relative;
  justify-content: center;
  padding-top: 4vh;
`
