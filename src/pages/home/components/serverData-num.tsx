import React from "react"
import "./styles/server-num.css"
export const ServerDataNumPart = (props: any) => {
  const navList: any[] = [
    {
      key: "69",
      label: "新能源汽车",
    },
    {
      key: "2385",
      label: "充电站",
    },
    {
      key: "1963",
      label: "充电桩",
    },
    {
      key: "2",
      label: "充电枪",
    },
    {
      key: "3",
      label: "日均充电订单量",
    },
    {
      key: "3",
      label: "日均充电量",
    },
  ]
  return (
    <div className="serverData-num-box">
      <div className="nav-item-list">
        {navList.map((nav) => (
          <div className="nav-item">
            <p className="serverData-name">{nav.label}</p>
            <span className="serverData-firstRemark">{nav.key}</span>
            <span className="serverData-secondRemark">个</span>
          </div>
        ))}
      </div>
    </div>
  )
}
