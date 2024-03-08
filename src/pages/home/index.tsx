import React from "react"
import styled from "@emotion/styled"
import "./index.css"
import { ProductListPart } from "./components/product-list"
import { EntryProcessPart } from "./components/entry-process"
import { AccountListPart } from "./components/account-list"
import { NewsListPart } from "./components/news-list"
import { ServerDataNumPart } from "./components/serverData-num"
import { BannerPart } from "./components/banner"
import { useDocumentTitle } from "utils"
export const HomePage = () => {
  useDocumentTitle("首页", false)
  return (
    <div className="home-page">
      <HomeHeaderNavBox
        className="home-header-nav-box"
        style={{
          textAlign: "center",
        }}
      >
        <BannerPart />
        <ServerDataNumPart />
      </HomeHeaderNavBox>
      <NoticeContainer>
        <AccountListPart />
        <NewsListPart />
      </NoticeContainer>
      <EntryProcessPart />
      <ProductListPart />
    </div>
  )
}
const HomeHeaderNavBox = styled.div`
  width: 100%;
  height: 320px;
  color: #fff;
  margin-bottom: 110px;
`
const NoticeContainer = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  gap: 10px;
`
