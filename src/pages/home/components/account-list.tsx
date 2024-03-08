import React from "react"
import "./styles/account-list.css"
import Paragraph from "antd/es/typography/Paragraph"

export const AccountListPart = (props: any) => {
  return (
    <div className="account-box">
      <div className="account-box-list">
        <AccountItem />
        <AccountItem />
        <AccountItem />
      </div>
    </div>
  )
}
export const AccountItem = (props: any) => {
  return (
    <div className="account-item">
      <p className="dot-inner-box"></p>
      <div className="account-content-box">
        <div className="account-title-inner">一次不用跑就能跨省办理业务</div>
        <Paragraph className="account-content-inner" ellipsis={{ rows: 2 }}>
          优秀的员工，先进的技术，精良的设备，严格的管理是公司得以不断发展养大、产品能够赢得用户依靠的根本所在。“可靠、专业”是我们生产精神和服务信念。
          实现了公司业务的良性发展。我们用心参与推广以及行业交流活动，...
        </Paragraph>
      </div>
    </div>
  )
}
