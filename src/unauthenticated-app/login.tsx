/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useState } from "react";
import { useAuth } from "context/auth-context";
import { Button, Dialog, Form, Input } from "antd-mobile";
import userImg from "assets/user.png";
import lockImg from "assets/lock.png";
import { EyeInvisibleOutline, EyeOutline } from "antd-mobile-icons";
import { useAsync } from "utils/use-async";
import "./login.css";
import styled from "@emotion/styled";
import DialogShow from "components/dialog-show";
const eye = css`
  padding: 4px;
  cursor: pointer;
  svg {
    display: block;
    font-size: var(--adm-font-size-7);
  }
`;
export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const [visible, setVisible] = useState(false);
  // HTMLFormElement extends Element
  const handleSubmit = async (values: {
    userName: string;
    userPassword: string;
  }) => {
    try {
      await run(login(values));
    } catch (e: any) {
      const handler = Dialog.show({
        content: (
          <DialogShow content={e.message} close={() => handler.close()} />
        ),
      });
    }
  };

  return (
    <div>
      <div className="form-box">
        <Form layout="horizontal" onFinish={handleSubmit}>
          <Form.Item
            label={<img className="user-icon" alt="user" src={userImg} />}
            name={"userName"}
          >
            <Input
              placeholder={"请输入用户名"}
              type="text"
              id={"userName"}
              maxLength={20}
              clearable
            />
          </Form.Item>
          <Form.Item
            label={<img className="user-password" alt="lock" src={lockImg} />}
            name={"userPassword"}
            extra={
              <div css={eye}>
                {!visible ? (
                  <EyeInvisibleOutline
                    style={{ fontSize: "30px" }}
                    onClick={() => setVisible(true)}
                  />
                ) : (
                  <EyeOutline
                    style={{ fontSize: "30px" }}
                    onClick={() => setVisible(false)}
                  />
                )}
              </div>
            }
          >
            <Input
              placeholder={"请输入密码"}
              type={visible ? "text" : "password"}
              id={"userPassword"}
              maxLength={20}
              clearable
            />
          </Form.Item>
          <LoginButton loading={isLoading} type={"submit"} color={"primary"}>
            登录系统
          </LoginButton>
        </Form>
      </div>
    </div>
  );
};

export const LoginButton = styled(Button)`
  position: absolute !important;
  left: 0;
  bottom: -12rem;
  width: 100%;
  height: 7.5rem !important;
  background: #61b4c6 !important;
  font-size: 3rem !important;
  border: none !important;
`;
