import React, { useState } from "react";
import { Button, Image, Grid, AutoCenter, Input } from "antd-mobile";
import styled from "@emotion/styled";
import leftArrowSrc from "assets/left-arrow.png";
import deleteSrc from "assets/delete.png";
import clearSrc from "assets/clear.png";
export const NumberKeyBoardModal = ({
  title,
  keywordList,
  onClose,
  onConfirm,
}: {
  title: string;
  keywordList: string[];
  onClose: () => void;
  onConfirm: (num: string) => void;
}) => {
  const [numberStr, setNumberStr] = useState("");
  const handleOk = () => {
    onConfirm(numberStr);
    onClose();
  };
  const handleClickButton = (num: string) => {
    if (num === "clear") {
      handleClear();
    } else if (num === "X") {
      handleDelete();
    } else {
      setNumberStr(numberStr + num);
    }
  };
  const handleDelete = () => {
    setNumberStr(numberStr.slice(0, numberStr.length - 1));
  };
  const handleClear = () => {
    setNumberStr("");
  };
  return (
    <ModalBox>
      <div className="modal-header">
        <Button
          className="return-box"
          block
          shape="rounded"
          color="primary"
          onClick={onClose}
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
        <ModalTitle>{title}</ModalTitle>
      </div>
      <div className="modal-input">
        <Grid columns={4} gap={20}>
          <Grid.Item span={3}>
            <div className="phone-input">
              <Input clearable value={numberStr}></Input>
            </div>
          </Grid.Item>
          <Grid.Item>
            <Button
              className="keyword-btn"
              block
              color="primary"
              onClick={() => handleOk()}
            >
              确认
            </Button>
          </Grid.Item>
        </Grid>
      </div>
      <div className="modal-number-list">
        <Grid columns={4} gap={20}>
          {keywordList?.map((num, i) => {
            return (
              <Grid.Item key={i}>
                <Button
                  className="keyword-btn"
                  block
                  color="primary"
                  onClick={() => handleClickButton(num)}
                >
                  {num === "clear" ? (
                    <Image src={clearSrc} height={"4vh"} fit="contain" />
                  ) : num === "X" ? (
                    <Image src={deleteSrc} height={"4vh"} fit="contain" />
                  ) : (
                    num
                  )}
                </Button>
              </Grid.Item>
            );
          })}
        </Grid>
      </div>
    </ModalBox>
  );
};
const ModalBox = styled.div`
  width: 60vw;
  height: 30vw;
  padding: 1vw 3vw 2vw;
`;
const ModalTitle = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: black;
  line-height: 6vh;
  font-size: 36px;
`;
