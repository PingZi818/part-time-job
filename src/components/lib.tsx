import styled from "@emotion/styled"
import React from "react"
import { ConfigProvider, Button, Spin } from "antd"
export const Row = styled.div<{
  gap?: number | boolean
  between?: boolean
  marginBottom?: number
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.between ? "space-between" : undefined)};
  margin-bottom: ${(props) => props.marginBottom + "rem"};

  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${(props) =>
      typeof props.gap === "number"
        ? props.gap + "rem"
        : props.gap
        ? "2rem"
        : undefined};
  }
`

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FullPageLoading = () => (
  <FullPage>
    <Spin />
  </FullPage>
)

export const FullPageErrorFallback = ({ error }: { error: Error | null }) => (
  <FullPage>
    <ErrorBox error={error} />
  </FullPage>
)

// 类型守卫
const isError = (value: any): value is Error => value?.message

export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <ConfigProvider>{error}</ConfigProvider>
  }
  return null
}
export const TitleBox = ({ name }: { name: string }) => {
  if (name) {
    return (
      <TitleB>
        <TitleText>{name}</TitleText>
      </TitleB>
    )
  }
  return null
}
export const TitleB = styled.div`
  margin-bottom: 20px;
  overflow: hidden;
`
export const TitleText = styled.span`
  float: left;
  padding: 0 0 10px 0px;
  font-weight: 500;
  font-size: 23px;
  color: #060a10;
  line-height: 18px;
`
export const ButtonNoPadding = styled(Button)`
  padding: 0;
`
export const Title = styled.div`
  padding: 1.5rem 0;
  color: rgb(255, 255, 255);
  font-size: 4.4vh;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 10px;
`
