import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDocumentTitle } from "utils";
import { useNavigate } from "react-router-dom";
import { AutoCenter, Dialog, Toast, Image, Modal } from "antd-mobile";
import { CardContent, CardTitle, Title } from "components/lib";
import styled from "@emotion/styled";
import "./step.css";
import peopleSrc from "assets/people.png";
import { useHttp } from "utils/http";
import {
  checkID,
  useChildTaskInUrl,
  useInterval,
  validateIdCard,
  validatePhone,
} from "./util";
import { StepProgress } from "./step-progress";
import { IdCard } from "./id-card";
import { PhoneInput } from "./phone-input";
import { BtnList } from "./btn-list";
import DialogShow from "components/dialog-show";
import { NumberKeyBoardModal } from "./number-key-board-modal";
import { typeName } from "types";
import { useMachineStatus } from "utils/task";
import { getUserCardId, setPrint } from "utils/androidJSBridge";
import FooterText from "components/footer";

export const StepScreen = () => {
  const client = useHttp();
  const navigate = useNavigate();

  const [takeType, setTakeType] = useState("1");
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

  const [phoneNumber, setPhoneNumber] = useState("");
  const [IDNumber, setIDNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [stepKey, setStepKey] = useState(0);
  const [visible, setVisible] = useState(false);
  const [num, setNum] = useState(120);

  const { data: currentChildTask } = useChildTaskInUrl();
  const { data: currentMachineStatus } = useMachineStatus();
  //   setTitle(currentChildTask?.businessName || '')
  useInterval(
    () => {
      setNum(num - 1);
      if (num === 0) {
        navigate("/");
      }
    },
    num === -1 ? null : 1000
  );
  useDocumentTitle(currentChildTask?.businessName || "", false);
  useInterval(
    () => {
      const res = getUserCardId();
      if (!res) return;
      if (res.status) {
        // Toast.show({
        //   icon: "success",
        //   content: "识别成功",
        // });
        setIDNumber(res.data.id);
        setUserName(res.data.name || "");
      } else {
        // Toast.show({
        //   icon: "fail",
        //   content: "暂未识别到您的信息，请您重新放置或手动输入身份信息",
        // });
      }
    },
    stepKey === 0 && !IDNumber && takeType === "1" ? 3000 : null
  );

  const goBackPage = () => {
    window.history.back();
  };
  const onResetTime = () => {
    setNum(120);
  };
  // 上一步
  const handlePrevStep = () => {
    if (stepKey === 0) {
      if (IDNumber) {
        // 已有身份证信息，点击左侧的返回按钮
        setIDNumber("");
        setPhoneNumber("");
        setTakeType("1");
        setUserName("");
      } else {
        // 返回上一页
        goBackPage();
      }
    } else if (stepKey > 0 && stepKey < stepData.length - 1) {
      setPhoneNumber("");
      setStepKey(stepKey - 1);
    } else if (stepKey === stepData.length - 1) {
      // 取号成功点击返回首页
      navigate("/");
    }
  };

  // 下一步
  const handleNextStep = () => {
    if (stepKey >= stepData.length - 1) {
      navigate("/");
      return;
    }
    // 如果在身份证号码填写页则需要校验身份证号码
    if (stepKey === 0 && takeType !== "3") {
      if (checkID(IDNumber)) {
        setStepKey(stepKey + 1);
        // TO DO 通过身份证号拿手机号
      } else {
        const handler = Dialog.show({
          content: (
            <DialogShow
              content="请填写正确的身份证号码"
              close={() => handler.close()}
            />
          ),
        });
      }
    } else {
      setStepKey(stepKey + 1);
    }
  };

  //   手动输入
  const inputManually = () => {
    setVisible(true);
  };

  // 临时取号
  const quickGetNo = () => {
    setStepKey(1);
    setTakeType("3");
  };

  // 取号
  const onGetFinalNo = () => {
    if (validatePhone(phoneNumber)) {
      const params = {
        applyUserName: userName || "",
        businessId: currentChildTask?.businessId,
        takeType: takeType,
        identityCardNum: IDNumber,
        phoneNumber: phoneNumber,
      };
      client("getTakeNo", { data: params, method: "POST" })
        .then((takeRes) => {
          setStepKey(stepKey + 1);
          const res = setPrint(takeRes);
          if (!res) {
            const handler = Dialog.show({
              content: (
                <DialogShow content="机器故障" close={() => handler.close()} />
              ),
            });
            return;
          }
          if (res?.status) {
          } else {
            const handler = Dialog.show({
              content: (
                <DialogShow
                  content={res.message || "机器故障"}
                  close={() => handler.close()}
                />
              ),
            });
          }
        })
        .catch((e) => {
          const handler = Dialog.show({
            content: (
              <DialogShow content={e.message} close={() => handler.close()} />
            ),
          });
        });
    } else {
      const handler = Dialog.show({
        content: (
          <DialogShow
            content="请填写正确的手机号码"
            close={() => handler.close()}
          />
        ),
      });
    }
  };
  const ref = useRef<any>(null);
  const refContent = useRef<any>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const isOverflowFun = () => {
    const width = ref.current?.offsetWidth || 0;
    const contentWidth = refContent.current?.offsetWidth || 0;
    if (contentWidth > width) {
      refContent.current.style.animationDuration = contentWidth / 110 + "s";
      return true;
    }
    return false;
  };
  useEffect(() => {
    const flag = isOverflowFun();
    setIsOverflow(flag);
    return () => setIsOverflow(false);
  }, [currentChildTask?.businessName]);
  return (
    <>
      <CardTitle>
        <Title className="title-box" ref={ref}>
          <div
            className={`title-content ${isOverflow ? "animation-class" : ""}`}
            data-title={currentChildTask?.businessName}
            ref={refContent}
          >
            {currentChildTask?.businessName}
          </div>
        </Title>
        <TextBox>
          <Image src={peopleSrc} width={"4vw"} height={"6vh"} fit="contain" />
          等待人数：{currentMachineStatus?.takeNum}
        </TextBox>
      </CardTitle>
      <CardContentBox className="step-box">
        <ContentMain>
          <StepProgress stepKey={stepKey} stepData={stepData} />
          <div className="main-content-bottom">
            {/* 输入身份证 */}
            {stepData[stepKey].key === "idCard" && (
              <IdCard
                value={IDNumber}
                takeType={takeType}
                setIDNumber={() => setIDNumber("")}
                setEdit={() => setVisible(true)}
                onResetTime={onResetTime}
              />
            )}
            {/* 输入手机号 */}
            {stepData[stepKey].key === "phone" && (
              <PhoneInput
                phoneNumber={phoneNumber}
                onGetPhoneNumber={setPhoneNumber}
                onResetTime={onResetTime}
              />
            )}
            {/* 完成 */}
            {stepData[stepKey].key === "complete" && (
              <AutoCenter className="complete-text">
                取号成功，请耐心等待！
              </AutoCenter>
            )}
          </div>
        </ContentMain>
      </CardContentBox>
      <CardContentFooter
        style={{
          justifyContent:
            stepData[stepKey].key === "complete" ? "end" : "space-between",
        }}
      >
        <BtnList
          IDNumber={IDNumber}
          stepKey={stepKey}
          stepData={stepData}
          onNext={handleNextStep}
          onPrev={handlePrevStep}
          quickGetNo={quickGetNo}
          inputManually={inputManually}
          onGetFinalNo={onGetFinalNo}
          onResetTime={onResetTime}
        />
      </CardContentFooter>
      <Modal
        visible={visible}
        maskStyle={{
          backdropFilter: "blur(8px)",
          background: "rgba(0, 0, 0, 0)",
        }}
        bodyClassName="number-key-board-content"
        content={
          <NumberKeyBoardModal
            title="请输入身份证号码"
            value={IDNumber}
            type={typeName.IDCard}
            keywordList={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0",
              "X",
              "delete",
            ]}
            onClose={() => {
              setVisible(false);
              setTakeType("1");
            }}
            onConfirm={(num) => {
              setIDNumber(num);
              setTakeType("2");
            }}
            onResetTime={onResetTime}
          />
        }
      />
      <FooterText time={num} />
    </>
  );
};

const CardContentBox = styled(CardContent)`
  flex: 1;
  position: relative;
  align-items: start;
  display: flex;
  flex-direction: column;
  padding: 2vh 4vh 1vh;
`;
const ContentMain = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;
const CardContentFooter = styled(CardContent)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4vh;
  height: 100px;
  padding: 0 40px;
  margin-bottom: 2vh;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  color: #75c4cb;
  font-size: 36px;
  font-weight: bold;
  white-space: nowrap;
`;
