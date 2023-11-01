import React from "react";
import styled from "@emotion/styled";

export default function FooterText({ time }: { time: number }) {
  return (
    <FooterContentText className="footer-content-box">
      本页面将于<TimeStyle>{time}秒</TimeStyle>后返回首页
    </FooterContentText>
  );
}
export const FooterContentText = styled.div`
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: #333;
  z-index: 1001;
  font-size: 2.15vh;
`;
export const TimeStyle = styled.span`
  color: #ca7b3d;
`;
