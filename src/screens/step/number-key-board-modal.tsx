import React, { useCallback, useState } from "react";
import { CloseOutline } from "antd-mobile-icons";
import "./number-key-board-modal.css";
import { Button, Image, Grid, Input, Dialog } from "antd-mobile";
import styled from "@emotion/styled";
import deleteSrc from "assets/delete.png";
import clearSrc from "assets/clear.png";
import { typeName } from "types";
import DialogShow from "components/dialog-show";
import { useMount } from "utils";
import { checkID, validatePhone } from "./util";
export const NumberKeyBoardModal = ({
  title,
  type,
  value,
  keywordList,
  onClose,
  onConfirm,
  onResetTime,
}: {
  title: string;
  type: typeName;
  value: string;
  keywordList: string[];
  onClose: () => void;
  onConfirm: (num: string) => void;
  onResetTime: () => void;
}) => {
  const [numberStr, setNumberStr] = useState(value);
  useMount(
    useCallback(() => {
      setNumberStr(value);
    }, [value])
  );
  const handleClose = () => {
    onResetTime();
    setNumberStr(value);
    onClose();
  };
  const handleOk = () => {
    onResetTime();
    if (type === typeName.IDCard) {
      if (checkID(numberStr)) {
        onConfirm(numberStr);
        handleClose();
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
      if (validatePhone(numberStr)) {
        onConfirm(numberStr);
        handleClose();
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
    }
  };
  const handleClickButton = (e: any, num: string) => {
    e.preventDefault();
    onResetTime();
    if (num === "clear") {
      handleClear();
    } else if (num === "delete") {
      handleDelete();
    } else {
      if (type === typeName.IDCard && numberStr.length < 18) {
        setNumberStr(numberStr + num);
      }
      if (type === typeName.Phone && numberStr.length < 11) {
        setNumberStr(numberStr + num);
      }
    }
  };
  const handleDelete = () => {
    setNumberStr(numberStr.slice(0, numberStr.length - 1));
  };
  const handleClear = () => {
    setNumberStr("");
  };
  return (
    <ModalBox className="number-key-board-modal">
      <div className="modal-header">
        <ModalTitle>{title}</ModalTitle>
      </div>
      <div className="modal-body">
        <div className="modal-input">
          <Grid columns={4} gap={20}>
            <Grid.Item span={4}>
              <div className="input-box">
                <Input
                  clearable
                  value={numberStr}
                  readOnly
                  max={type === typeName.IDCard ? 18 : 11}
                ></Input>
                <CloseOutline onClick={handleClear} className="icon-close" />
              </div>
            </Grid.Item>
          </Grid>
        </div>
        <div className="modal-number-list">
          <Grid columns={4} gap={20}>
            <Grid.Item span={3}>
              <Grid columns={3} gap={20}>
                {keywordList?.map((num, i) => {
                  return (
                    <Grid.Item
                      key={i}
                      span={type === typeName.Phone && num === "0" ? 2 : 1}
                    >
                      <Button
                        className="keyword-btn"
                        block
                        color="primary"
                        onClick={(e) => handleClickButton(e, num)}
                      >
                        {num === "clear" ? (
                          <Image src={clearSrc} height={"4vh"} fit="contain" />
                        ) : num === "delete" ? (
                          <Image src={deleteSrc} height={"4vh"} fit="contain" />
                        ) : (
                          num
                        )}
                      </Button>
                    </Grid.Item>
                  );
                })}
              </Grid>
            </Grid.Item>
            <Grid.Item>
              <div className="btn-right-box">
                <Button
                  className="confirm-btn"
                  block
                  color="primary"
                  onClick={() => handleOk()}
                >
                  确认
                </Button>
                <Button
                  className="close-box"
                  block
                  color="primary"
                  onClick={handleClose}
                >
                  <div className="font-size-28">返回</div>
                </Button>
              </div>
            </Grid.Item>
          </Grid>
        </div>
      </div>
    </ModalBox>
  );
};
const ModalBox = styled.div`
  width: 50vw;
  padding: 0vw 3vw 1vw;
`;
const ModalTitle = styled.div`
  text-align: center;
  color: black;
  line-height: 6vh;
  font-size: 36px;
`;
