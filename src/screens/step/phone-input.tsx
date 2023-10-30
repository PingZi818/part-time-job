import React from "react";

export const PhoneInput = ({
  phoneNumber,
  handleEdit,
}: {
  phoneNumber: string;
  handleEdit: () => void;
}) => {
  return (
    <div className="step-item-info">
      <div className="phone-info">
        手机号码：{phoneNumber}
        <div className="link-btn" onClick={() => handleEdit()}>
          编辑
        </div>
      </div>
    </div>
  );
};
