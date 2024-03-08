import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import { Layout, Menu, theme } from "antd"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const { Header, Content, Footer } = Layout

export default function LayoutBox(props: any) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const location = useLocation()
  const navItems = [
    { key: "/home", label: "首页" },
    { key: "/company", label: "企业入驻" },
    { key: "/solution", label: "解决方案" },
    { key: "/about", label: "关于我们" },
  ]

  const menuItems = navItems.map((menuItem) => {
    return {
      key: menuItem.key,
      label: (
        <Link to={menuItem.key} key={menuItem.key}>
          <MenuLabel className="menu-label">{menuItem.label}</MenuLabel>
        </Link>
      ),
    }
  })
  const [selectedKeys, setSelectedKeys] = useState([""])
  useEffect(() => {
    setSelectedKeys([location.pathname])
  }, [location])
  return (
    <LayoutContainer>
      <LayoutHeaderTop>
        <div className="demo-logo-content">
          <p className="logo-text">YOUR LOGO</p>
          <p className="date-text">2024年2月1日 星期四</p>
        </div>
      </LayoutHeaderTop>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu
          className="menu-box-container"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/home"]}
          defaultOpenKeys={["/"]}
          selectedKeys={selectedKeys}
          items={menuItems}
          style={{
            margin: "auto",
            width: "1200px",
            minWidth: 0,
            height: "100%",
            justifyContent: "left",
            alignItems: "center",
          }}
        />
      </Header>
      <LayoutContent style={{ padding: "0" }}>
        <div
          style={{
            margin: "auto",
            minHeight: 280,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.content}
        </div>
      </LayoutContent>
      <Footer
        style={{
          textAlign: "center",
          height: "120px",
          padding: "40px",
          fontWeight: "400",
          fontSize: "14px",
          color: "#EAEAEA",
          lineHeight: "23px",
        }}
      >
        <p>
          版权所有:苏州市工业和信息化局 主办单位:苏州市工业和信息化局
          承办单位:XXXX
        </p>
        <p>苏ICP备00000000号 苏公网安备000000000000号 网站标识码:00000000000</p>
      </Footer>
    </LayoutContainer>
  )
}
const LayoutContent = styled(Content)`
  height: calc(100% - 293px);
  overflow: auto;
  background: #f2f3f5;
`
const LayoutHeaderTop = styled.div`
  width: 100%;
  background: #f2f3f5;
`
const LayoutContainer = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`
const MenuLabel = styled.h2`
  font-size: 18px;
  font-weight: normal;
  text-align: center;
  padding: 0;
  margin: 0;
  line-height: 18px;
`
