import styled from "@emotion/styled"
import { Button } from "antd"
import { ProcessItem } from "pages/home/components/entry-process"
import React from "react"
import { TitleContainer } from "./components/title"
import Paragraph from "antd/es/typography/Paragraph"
import CompanyImg1 from "assets/company-bg1.png"
import CompanyImg2 from "assets/company-bg2.png"
import CompanyImg3 from "assets/company-bg3.png"
import { useProcessList } from "api/home"
export const CompanyPage = () => {
  const { data: list } = useProcessList()
  return (
    <>
      <CompanyEntryContainer>
        <EntryContainer>
          <div className="process-list-box">
            <TitleContainer name="入驻流程"></TitleContainer>
            <div className="process-list">
              {list?.map((item, i) => (
                <ProcessItem index={i} process={item} len={list.length} />
              ))}
            </div>
          </div>
          <CompanyEntryRightOperation className="right-operation">
            <OperationBtn type="primary">企业注册</OperationBtn>
            <OperationBtn type="primary">系统登录</OperationBtn>
            <OperationBtn type="primary">APP下载</OperationBtn>
            <QRCode></QRCode>
          </CompanyEntryRightOperation>
        </EntryContainer>
      </CompanyEntryContainer>
      <CompanyEntryNoticeContainer>
        <TitleContainer name="入驻须知"></TitleContainer>
        <ContentContainer>
          <Paragraph className="content-inner">
            近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。
            近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。
            近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。
          </Paragraph>
        </ContentContainer>
      </CompanyEntryNoticeContainer>
      <CompanyEntryRuleContainer>
        <TitleContainer name="入驻政策"></TitleContainer>
        <ContentContainer>
          <Paragraph className="content-inner">
            近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。
            近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。
            近日，北京春雨听雷网络科技有限公司被北京市房山区市场监督管理局行政处罚及没收金额共计3.6万元。据多家媒体报道，春雨听雷即“网红鼻祖”papi酱一手创立的公司，旗下拥有MCN机构papitube。据北京市市场监督管理局官网显示，近日，北京春雨听雷网络科技有限公司（以下简称“春雨听雷网络公司”）因广告违法，被北京市房山区市场监督管理局罚款1.8万元、没收违法所得1.8万元。
          </Paragraph>
        </ContentContainer>
      </CompanyEntryRuleContainer>
    </>
  )
}
const CompanyEntryContainer = styled.div`
  width: 100%;
  color: #fff;
  background: url(${CompanyImg1}) no-repeat center;
  background-size: cover;
`
const EntryContainer = styled.div`
  display: flex;
  padding: 40px 0;
  margin: auto;
  width: 1200px;
  .process-list-box {
    flex: 1;
  }
`
const CompanyEntryNoticeContainer = styled.div`
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  color: #fff;
  background: url(${CompanyImg2}) no-repeat center;
  background-size: cover;
`
const CompanyEntryRuleContainer = styled.div`
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  color: #fff;
  background: url(${CompanyImg3}) no-repeat center;
  background-size: cover;
`
const CompanyEntryRightOperation = styled.div`
  width: 195px;
`
const OperationBtn = styled(Button)`
  width: 100%;
  height: 38px;
  background: #386bcc;
  margin: auto;
  margin-bottom: 15px;
  display: block;
`
const QRCode = styled.div`
  width: 195px;
  height: 195px;
  background: #386bcc;
`
const ContentContainer = styled.div`
  margin: auto;
  width: 1200px;
  .content-inner {
    font-weight: 400;
    font-size: 14px;
    color: #060a10;
    line-height: 27px;
  }
`
