import React, { useState } from "react";
import { typeName } from "types";
import { Modal } from "antd-mobile";
import { NumberKeyBoardModal } from "./number-key-board-modal";

export const PhoneInput = ({
  phoneNumber,
  onGetPhoneNumber,
  onResetTime,
}: {
  phoneNumber: string;
  onGetPhoneNumber: (num: string) => void;
  onResetTime: () => void;
}) => {
  const [visible, setVisible] = useState(true);
  const handleEdit = () => {
    onResetTime();
    setVisible(true);
  };
  const handleClose = () => {
    onResetTime();
    setVisible(false);
  };
  const handleConfirm = (num: string) => {
    onResetTime();
    onGetPhoneNumber(num);
  };
  return (
    <div className="step-item-info">
      <div className="phone-info">
        手机号码：{phoneNumber}
        <div className="link-btn" onClick={() => handleEdit()}>
          编辑
        </div>
      </div>
      <Modal
        visible={visible}
        bodyClassName="number-key-board-content"
        content={
          <NumberKeyBoardModal
            value={phoneNumber}
            title="请输入手机号码"
            type={typeName.Phone}
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
              "delete",
            ]}
            onResetTime={onResetTime}
            onClose={() => setVisible(false)}
            onConfirm={(num) => handleConfirm(num)}
          />
        }
      />
    </div>
  );
};
