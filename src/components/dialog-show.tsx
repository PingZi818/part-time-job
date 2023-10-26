import React from "react";
import { AutoCenter, Button } from "antd-mobile";
import styled from "@emotion/styled";

export default function DialogShow(props: any) {
  return (
    <div className="dialog-content-box">
      <AutoCenter>{props.content}</AutoCenter>
      <DialogButton onClick={() => props.close()}>我知道了</DialogButton>
    </div>
  );
}
export const DialogButton = styled(Button)`
  margin-top: 40px;
  color: white;
  background: #61b4c6 !important;
  font-size: 2rem !important;
  border: none !important;
`;
