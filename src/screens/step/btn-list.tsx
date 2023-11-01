import React from "react";
import { AutoCenter, Button, Grid, Image } from "antd-mobile";
import prevStepSrc from "assets/prev-step.png";
import nextStepSrc from "assets/next-step.png";
import homeSrc from "assets/home.png";
import { useNavigate } from "react-router-dom";

export const BtnList = ({
  IDNumber,
  stepKey,
  stepData,
  onNext,
  onPrev,
  quickGetNo,
  onGetFinalNo,
  inputManually,
  onResetTime,
}: {
  IDNumber: string;
  stepKey: number;
  stepData: { key: string; name: string }[];
  onNext: () => void;
  onPrev: () => void;
  quickGetNo: () => void;
  onGetFinalNo: () => void;
  inputManually: () => void;
  onResetTime: () => void;
}) => {
  const navigate = useNavigate();
  const goNextStep = () => {
    onResetTime();
    onNext();
  };
  const goPreStep = () => {
    onResetTime();
    onPrev();
  };
  const goHomePage = () => {
    // 点击返回首页
    navigate("/");
  };
  return (
    <>
      <div className="left-btn-box">
        {stepKey === stepData.length - 1 ? (
          ""
        ) : (
          <Button
            className="step-box-return-box"
            block
            shape="rounded"
            color="primary"
            onClick={goPreStep}
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
        )}
        <Button
          className="step-box-home-btn"
          block
          color="primary"
          onClick={goHomePage}
        >
          <div className="btn-with-icon">
            <AutoCenter>
              <Image src={homeSrc} width={"2vw"} height={"4vh"} fit="contain" />
            </AutoCenter>
            <div className="btn-text">
              {stepKey === stepData.length - 1 ? "返回首页" : "首页"}
            </div>
          </div>
        </Button>
      </div>
      {!IDNumber && (
        <div className="middle-btn-box">
          {stepData[stepKey].key === "idCard" && (
            <Button
              className="step-box-temporary-btn"
              block
              color="primary"
              onClick={() => {
                onResetTime();
                inputManually();
              }}
            >
              <div className="font-size-28">去手动输入</div>
            </Button>
          )}
          {stepData[stepKey].key === "idCard" && (
            <Button
              className="step-box-temporary-btn"
              block
              color="primary"
              onClick={() => {
                onResetTime();
                quickGetNo();
              }}
            >
              <div className="font-size-28">临时取号</div>
            </Button>
          )}
        </div>
      )}
      <div className="right-btn-box">
        {stepData[stepKey].key === "idCard" && (
          <Button
            className="step-box-next-box"
            block
            shape="rounded"
            color="primary"
            onClick={goNextStep}
          >
            <div className="btn-with-icon">
              <div className="btn-text">下一步</div>
              <AutoCenter>
                <Image
                  src={nextStepSrc}
                  width={"2vw"}
                  height={"4vh"}
                  fit="contain"
                />
              </AutoCenter>
            </div>
          </Button>
        )}
        {stepData[stepKey].key === "phone" && (
          <Button
            className="get-number-btn"
            block
            shape="rounded"
            color="primary"
            onClick={() => {
              onResetTime();
              onGetFinalNo();
            }}
          >
            <div className="font-size-28">去取号</div>
          </Button>
        )}
      </div>
    </>
  );
};
