import React from "react"
import "./styles/account-list.css"
import Paragraph from "antd/es/typography/Paragraph"
import { useAccountList } from "api/home"
import { Account } from "types/home"

export const AccountListPart = (props: any) => {
  const { data: accountList } = useAccountList()
  return (
    <div className="account-box">
      <div className="account-box-list">
        {accountList?.map((v) => (
          <AccountItem key={v.id} account={v} />
        ))}
      </div>
    </div>
  )
}
export const AccountItem = ({ account }: { account: Account }) => {
  return (
    <div className="account-item">
      <p className="dot-inner-box"></p>
      <div className="account-content-box">
        <div className="account-title-inner">{account.title}</div>
        <Paragraph className="account-content-inner" ellipsis={{ rows: 2 }}>
          {account.description}
        </Paragraph>
      </div>
    </div>
  )
}
