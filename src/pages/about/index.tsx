import styled from "@emotion/styled"
import Paragraph from "antd/es/typography/Paragraph"
import { TitleContainer } from "pages/company/components/title"
import React from "react"
import IntroduceVideoImg from "assets/introduce-video.png"
import PhoneImg from "assets/phone.png"
import AddressImg from "assets/address.png"
import EmailImg from "assets/email.png"
import IntroImg from "assets/intro-bg.png"
export const AboutPage = () => {
  return (
    <>
      <PlatformIntroduceContainer>
        <TitleContainer name="平台介绍"></TitleContainer>
        <PlatformIntroduceContentContainer>
          <Paragraph className="content-inner">
            闪魂ShiningSoul是上海真友趣文化创意有限公司于2023年创立的文创品牌，
            以始终追求品质精良、工艺精湛的产品和服务为己任，覆盖全产业链布局。
            主营业务包括自有IP卡牌研发、多个知名IP联名卡牌创作等。
            用卡牌讲述中国故事，坚守“闪耀每一个有趣的灵魂”的品牌理念，
            致力于寻找志趣相投的玩家，探索卡牌的无限乐趣。
          </Paragraph>
        </PlatformIntroduceContentContainer>
        <img width={741} height={417} src={IntroduceVideoImg} alt=""></img>
      </PlatformIntroduceContainer>
      <ContractUsContainer>
        <TitleContainer name="联系方式"></TitleContainer>
        <ContractUsContentContainer>
          <div className="contract-item">
            <img src={AddressImg} alt="" />
            <p className="label-name">地址</p>
            <span className="description">苏州市姑苏区三香路998号</span>
          </div>
          <div className="contract-item">
            <img src={EmailImg} alt="" />
            <p className="label-name">邮箱</p>
            <span className="description">18088888888@163.com</span>
          </div>
          <div className="contract-item">
            <img src={PhoneImg} alt="" />
            <p className="label-name">联系电话</p>
            <div className="description">
              <p> 电话：0512-68612115</p>
              <p> 传真：0512-68612106</p>
            </div>
          </div>
        </ContractUsContentContainer>
      </ContractUsContainer>
    </>
  )
}
const PlatformIntroduceContainer = styled.div`
  text-align: center;
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  color: #fff;
  background: url(${IntroImg}) no-repeat center;
  background-size: cover;
`
const ContractUsContainer = styled.div`
  padding: 40px 0;
  width: 100%;
  min-height: 320px;
  color: #fff;
  background: #fff;
`
const PlatformIntroduceContentContainer = styled.div`
  text-align: center;
  margin: auto;
  width: 1200px;
  margin-bottom: 40px;
  .content-inner {
    font-weight: 400;
    font-size: 14px;
    color: #060a10;
    line-height: 27px;
  }
`
const ContractUsContentContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin: auto;
  width: 1200px;
  gap: 53px;
  .contract-item {
    padding: 30px;
    width: 272px;
    height: 155px;
    background: #ffffff;
    border: 1px solid #e3e3e3;
    .label-name {
      font-weight: 500;
      font-size: 15px;
      color: #060a10;
      line-height: 30px;
    }
    .description {
      font-weight: 500;
      font-size: 12px;
      color: #747474;
      line-height: 14px;
    }
  }
`
