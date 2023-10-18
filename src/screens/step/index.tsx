import React, { useState } from "react";
import { useDocumentTitle } from "utils";
import { useNavigate } from "react-router-dom";
import { Button, Image, Grid, AutoCenter, Input, Modal } from "antd-mobile";
import { CardContent, CardTitle, Title } from "components/lib";
import styled from "@emotion/styled";
import leftArrowSrc from "assets/left-arrow.png";
import rightArrowSrc from "assets/right-arrow.png";
import stepArrowSrc from "assets/step-arrow.png";
import "./step.css";
import { NumberKeyBoardModal } from "./number-key-board-modal";
export const StepScreen = () => {
  const [stepData, setStepData] = useState([
    {
      key: "idCard",
      name: "读取身份证信息",
    },
    {
      key: "phone",
      name: "输入手机号码",
    },
    {
      key: "complete",
      name: "完成",
    },
  ]);
  const [stepKey, setStepKey] = useState(0);

  const quickGetNo = () => {
    setStepData([
      {
        key: "phone",
        name: "输入手机号码",
      },
      {
        key: "complete",
        name: "完成",
      },
    ]);
  };
  useDocumentTitle("项目列表", false);
  return (
    <>
      <CardTitle>
        <Title>xxxxxx村社区——保险服务</Title>
      </CardTitle>
      <CardContentBox className="step-box">
        <ContentHeader>
          <TextBox>居民养老保险参保缴费</TextBox>
          <TextBox>已取号人数：10人</TextBox>
        </ContentHeader>
        <ContentMain>
          <StepProgress stepKey={stepKey} stepData={stepData} />
          <div className="main-content-bottom">
            {/* 输入身份证 */}
            {stepData[stepKey].key === "idCard" && <IdCard />}
            {/* 输入手机号 */}
            {stepData[stepKey].key === "phone" && <PhoneInput />}
            {/* 完成 */}
            {stepData[stepKey].key === "complete" && (
              <AutoCenter className="complete-text">
                取号成功，请耐心等待！
              </AutoCenter>
            )}
          </div>
        </ContentMain>
        <ContentFooter
          style={{
            justifyContent:
              stepData[stepKey].key === "complete" ? "end" : "space-between",
          }}
        >
          <BtnList
            stepKey={stepKey}
            stepData={stepData}
            onNext={() => setStepKey(stepKey + 1)}
            onPrev={() => setStepKey(stepKey - 1)}
            quickGetNo={quickGetNo}
          />
        </ContentFooter>
      </CardContentBox>
    </>
  );
};
const StepProgress = ({
  stepKey,
  stepData,
}: {
  stepKey: number;
  stepData: { key: string; name: string }[];
}) => {
  return (
    <Grid columns={23} gap={8} className="step-item-list">
      {stepData?.map((item, i) => {
        return (
          <Grid.Item span={item.key !== "complete" ? 8 : 7} key={item.key}>
            <Grid columns={item.key !== "complete" ? 8 : 7} gap={8}>
              <Grid.Item span={7}>
                <StepItemBox
                  className={
                    i <= stepKey
                      ? "step-item-box active-step-item"
                      : "step-item-box"
                  }
                >
                  {item.name}
                </StepItemBox>
              </Grid.Item>
              <Grid.Item style={{ display: "flex", alignItems: "center" }}>
                {item.key !== "complete" && (
                  <Image src={stepArrowSrc} fit="contain" />
                )}
              </Grid.Item>
            </Grid>
          </Grid.Item>
        );
      })}
    </Grid>
  );
};

const IdCard = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Grid columns={23} gap={8} className="step-item-list">
      <Grid.Item span={16} className="text-align-left font-size-46">
        请将您的身份证放在指定位置，或您也可以通过下方的手动输入方式进行取号
      </Grid.Item>
      <Grid.Item span={7} style={{ display: "flex", alignItems: "end" }}>
        <Modal
          visible={visible}
          bodyClassName="number-key-board-content"
          content={
            <NumberKeyBoardModal
              title="请输入身份证号码"
              keywordList={[
                "1",
                "2",
                "3",
                "X",
                "4",
                "5",
                "6",
                "0",
                "7",
                "8",
                "9",
                "x",
              ]}
              onClose={() => setVisible(false)}
            />
          }
        />
        <Button
          className="primary-box"
          block
          shape="rounded"
          color="primary"
          onClick={() => setVisible(true)}
        >
          <div className="font-size-28">手动输入</div>
        </Button>
      </Grid.Item>
    </Grid>
  );
};
const PhoneInput = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Grid columns={23} gap={8} className="step-item-list">
      <Grid.Item span={4}>
        <div className="phone-input-label">手机号码：</div>
      </Grid.Item>
      <Grid.Item span={11}>
        <div className="phone-input">
          <Input
            placeholder=""
            onFocus={() => setVisible(true)}
            clearable
          ></Input>
        </div>
        <Modal
          visible={visible}
          bodyClassName="number-key-board-content"
          content={
            <NumberKeyBoardModal
              title="请输入手机号码"
              keywordList={[
                "1",
                "2",
                "3",
                "X",
                "4",
                "5",
                "6",
                "0",
                "7",
                "8",
                "9",
                "clear",
              ]}
              onClose={() => setVisible(false)}
            />
          }
        />
      </Grid.Item>
    </Grid>
  );
};
const BtnList = ({
  stepKey,
  stepData,
  onNext,
  onPrev,
  quickGetNo,
}: {
  stepKey: number;
  stepData: { key: string; name: string }[];
  onNext: () => void;
  onPrev: () => void;
  quickGetNo: () => void;
}) => {
  const navigate = useNavigate();
  const goBackPage = () => {
    window.history.back();
  };
  const goNextStep = () => {
    stepKey < stepData.length - 1 && onNext();
  };
  const goPreStep = () => {
    if (stepKey === 0) {
      goBackPage();
    } else if (stepKey > 0 && stepKey < stepData.length - 1) {
      onPrev();
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Button
        className="return-box"
        block
        shape="rounded"
        color="primary"
        onClick={goPreStep}
      >
        <Grid columns={4} gap={6}>
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
          <Grid.Item span={3}>
            <div className="font-size-28">返回</div>
          </Grid.Item>
        </Grid>
      </Button>
      {stepData[stepKey].key === "idCard" && (
        <Button
          className="middle-box"
          block
          shape="rounded"
          color="primary"
          onClick={quickGetNo}
        >
          <div className="font-size-28">临时取号</div>
        </Button>
      )}
      {stepData[stepKey].key === "idCard" && (
        <Button
          className="next-box"
          block
          shape="rounded"
          color="primary"
          onClick={goNextStep}
        >
          <Grid columns={4} gap={8}>
            <Grid.Item span={3}>
              <div className="font-size-28">下一步</div>
            </Grid.Item>
            <Grid.Item>
              <AutoCenter>
                <Image
                  src={rightArrowSrc}
                  width={"4vw"}
                  height={"4vh"}
                  fit="contain"
                />
              </AutoCenter>
            </Grid.Item>
          </Grid>
        </Button>
      )}
      {stepData[stepKey].key === "phone" && (
        <Button
          className="get-number-btn"
          block
          shape="rounded"
          color="primary"
          onClick={goNextStep}
        >
          <div className="font-size-28">去取号</div>
        </Button>
      )}
    </>
  );
};
const CardContentBox = styled(CardContent)`
  position: relative;
  align-items: start;
  display: flex;
  flex-direction: column;
  padding: 2vh 4vh 4vh;
`;
const ContentHeader = styled.div`
  margin-top: 1vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContentMain = styled.div`
  flex: 1;
  margin-top: 3vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;
const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const TextBox = styled.div`
  font-size: 4.6rem;
  line-height: 4vh;
`;
const StepItemBox = styled.div`
  background: #b9b9b9;
  font-size: 4.6rem;
  padding: 1rem 0;
  color: #fff;
  line-height: 8vh;
  border-radius: 6px;
`;
