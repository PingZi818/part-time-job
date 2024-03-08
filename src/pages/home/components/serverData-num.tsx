import React from "react"
import "./styles/server-num.css"
import { useServerData } from "api/home"
export const ServerDataNumPart = (props: any) => {
  const { data: serverDataList } = useServerData()
  return (
    <div className="serverData-num-box">
      <div className="nav-item-list">
        {serverDataList?.map((server) => (
          <div className="nav-item" key={server.id}>
            <p className="serverData-name">{server.typeName}</p>
            <span className="serverData-firstRemark">{server.typeValue}</span>
            <span className="serverData-secondRemark">个</span>
          </div>
        ))}
      </div>
    </div>
  )
}
