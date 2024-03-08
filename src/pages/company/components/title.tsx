import styled from "@emotion/styled"
import React from "react"

export const TitleContainer = ({ name }: { name: string }) => {
  return (
    <TitleB>
      <TitleText>{name}</TitleText>
    </TitleB>
  )
}

const TitleB = styled.div`
  position: relative;
  margin-bottom: 40px;
  height: 30px;
  overflow: hidden;
  text-align: center;
`
const TitleText = styled.span`
  padding: 0 0 10px 0px;
  font-weight: 500;
  font-size: 23px;
  color: #060a10;
  line-height: 18px;
  :after {
    position: absolute;
    display: block;
    content: "";
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 20px;
    height: 2px;
    background: #000000;
  }
`
