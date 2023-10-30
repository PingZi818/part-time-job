import React from "react";
import { AutoCenter } from "antd-mobile";
import styled from "@emotion/styled";

export const StepProgress = ({
  stepKey,
  stepData,
}: {
  stepKey: number;
  stepData: { key: string; name: string }[];
}) => {
  const getClassName = (i: number) => {
    const lastIndex = stepData.length - 1;
    if (i < stepKey || stepKey === lastIndex) return "pass-step-item";
    if (i === stepKey && stepKey !== lastIndex) return "active-step-item";
    return "";
  };
  return (
    <div className="step-item-list">
      {stepData?.map((item, i) => {
        return (
          <StepItemBox
            key={item.key}
            className={`step-item-box ${getClassName(i)}`}
          >
            <CircleItem className="circle-item">{i + 1}</CircleItem>
            <StepNameItem className="step-name-item">{item.name}</StepNameItem>
          </StepItemBox>
        );
      })}
    </div>
  );
};
const StepItemBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StepNameItem = styled(AutoCenter)`
  position: relative;
  background: #d4d4d4;
  font-size: 3rem;
  font-weight: bold;
  height: 60px;
  padding: 1rem 36px;
  color: #959595;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  width: 18vw;
`;
const CircleItem = styled(AutoCenter)`
  position: absolute;
  width: 56px;
  height: 56px;
  z-index: 1;
  left: 0;
  border-radius: 50%;
  background: #d4d4d4;
  color: #959595;
  font-size: 3rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;