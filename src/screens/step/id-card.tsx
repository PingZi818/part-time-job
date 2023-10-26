import React, { useState } from "react";
import { Image } from "antd-mobile";
import IDCardGifSrc from "assets/id-card.gif";
const IdCardInfo = ({
  value,
  handleEClear,
}: {
  value: string;
  handleEClear: () => void;
}) => {
  return (
    <div className="step-item-info">
      <div className="id-card-info">身份证号码：{value}</div>
      <div className="action-box">
        如需更换身份证，点击
        <div className="link-btn" onClick={() => handleEClear()}>
          更换
        </div>
      </div>
    </div>
  );
};
const IdCardManuallyInfo = ({
  value,
  setEdit,
}: {
  value: string;
  setEdit: () => void;
}) => {
  return (
    <div className="step-item-info">
      <div className="id-card-info">
        身份证号码：{value}
        <div className="link-btn" onClick={() => setEdit()}>
          编辑
        </div>
      </div>
    </div>
  );
};
export const IdCard = ({
  value,
  takeType,
  setIDNumber,
  setEdit,
  onResetTime,
}: {
  value: string;
  takeType: string;
  setIDNumber: () => void;
  setEdit: () => void;
  onResetTime: () => void;
}) => {
  const handleEdit = () => {
    onResetTime();
    setEdit();
  };
  const handleEClear = () => {
    onResetTime();
    setIDNumber();
  };
  return (
    <>
      {value ? (
        takeType === "2" ? (
          <IdCardManuallyInfo value={value} setEdit={handleEdit} />
        ) : (
          <IdCardInfo value={value} handleEClear={handleEClear} />
        )
      ) : (
        <div className="step-item-content">
          <div className="text-align-center font-size-28">
            请将您的身份证放在指定位置，或您也可以通过下方的手动输入方式进行取号
          </div>
          <div className="id-card-img">
            <Image src={IDCardGifSrc} height={"28vh"} fit="contain" />
          </div>
        </div>
      )}
    </>
  );
};
