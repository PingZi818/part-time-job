import React from "react"
import styled from "@emotion/styled"
import {
  Image,
  Card,
  Carousel,
  List,
  Tabs,
  TabsProps,
  theme,
  Steps,
} from "antd"
import "./index.css"
import { LeftLine, TitleBox } from "components/lib"
// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// }
export const HomePage = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken()
  const onChange = (key: string) => {
    console.log(key)
  }
  const governmentAnnouncementContent = [
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
    {
      id: "",
      title: "关于征集影响营商环境建设问题线索的公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
  ].map((item, i) => {
    return (
      <div className="announcement-item" key={i}>
        {item.title} <span className="announce-time">{item.createTime}</span>
      </div>
    )
  })
  const convenienceAnnouncementContent = [
    {
      id: "",
      title: "便民公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
  ].map((item, i) => {
    return (
      <div className="announcement-item" key={i}>
        {item.title} <span className="announce-time">{item.createTime}</span>
      </div>
    )
  })
  const peopleAnnouncementContent = [
    {
      id: "",
      title: "民生公告",
      description: "",
      url: "",
      createTime: "2024-2-23",
    },
  ].map((item, i) => {
    return (
      <div className="announcement-item" key={i}>
        {item.title} <span className="announce-time">{item.createTime}</span>
      </div>
    )
  })
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "政务公告",
      children: governmentAnnouncementContent,
    },
    {
      key: "2",
      label: "便民公告",
      children: convenienceAnnouncementContent,
    },
    {
      key: "3",
      label: "民生公告",
      children: peopleAnnouncementContent,
    },
  ]
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
  const description = "This is a description."
  const productListData = [
    {
      title: "新春走基层",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 5",
    },
    {
      title: "Title 6",
    },
  ]
  return (
    <div className="home-page">
      <HomeHeaderNavBox
        className="home-header-nav-box"
        style={{
          textAlign: "center",
        }}
      >
        <div className="carousel-box">
          <Carousel autoplay>
            <div>
              <img
                height="320px"
                width="100%"
                src="https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png"
                alt=""
              />
            </div>
            <div>
              <img
                height="320px"
                width="100%"
                src="https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png"
                alt=""
              />
            </div>
            <div>
              <img
                height="320px"
                width="100%"
                src="https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png"
                alt=""
              />
            </div>
            <div>
              <img
                height="320px"
                width="100%"
                src="https://www.suzhou.gov.cn/szsrmzf/xhtml/static/2023/images/public/index_header_bg.png"
                alt=""
              />
            </div>
          </Carousel>
        </div>
        {/* <div className="serverData-num-box">
          <Space size={[20, 16]} wrap>
            {navList.map((nav) => (
              <div className="nav-item">
                <span className="serverData-firstRemark">{nav.key}</span>
                <span className="serverData-secondRemark">个</span>
                <p className="serverData-name">{nav.label}</p>
              </div>
            ))}
          </Space>
        </div> */}
      </HomeHeaderNavBox>
      <div className="serverData-num-box1">
        <div className="nav-item-list">
          {navList.map((nav) => (
            <div className="nav-item">
              <span className="serverData-firstRemark">{nav.key}</span>
              <span className="serverData-secondRemark">个</span>
              <p className="serverData-name">{nav.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="home-header-box-one">
        <div className="flex-col account-box">
          <LeftLine></LeftLine>
          <Tabs
            // style={{
            //   float: "left",
            //   fontSize: "16px",
            //   color: "#333",
            //   lineHeight: "32px",
            //   padding: "0 0 10px 20px",
            // }}
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          ></Tabs>
        </div>
        {/* <div className="flex-col middle"></div> */}
        <div className="flex-col news-box">
          <TitleBox name="新闻列表" />
          <div className="news-box-list">
            <ul className="info-list dot ymd res clearfix">
              <li>
                <a
                  href="/szsrmzf/bmdt/202402/27916cb8359f4124aad9cfd93a26561c.shtml"
                  target="_blank"
                  title="太仓成功创建全国城乡交通运输一体化示范县"
                >
                  太仓成功创建全国城乡交通运输一体化示范县
                </a>
                <span className="time">2024-02-23</span>
              </li>

              <li>
                <a
                  href="/szsrmzf/bmdt/202402/26810d267faf4ae2a975cde72b2a1b99.shtml"
                  target="_blank"
                  title="苏州市审计工作会议暨全市审计机关全面从严治党工作会议召开"
                >
                  苏州市审计工作会议暨全市审计机关全面从严治党工作会议召开
                </a>
                <span className="time">2024-02-22</span>
              </li>

              <li>
                <a
                  href="/szsrmzf/bmdt/202402/194e361ed4d74207bb0ec3513bbeecc3.shtml"
                  target="_blank"
                  title="苏州市交通运输局局长焦亚飞带队督查重点工程复工情况"
                >
                  苏州市交通运输局局长焦亚飞带队督查重点工程复工情况
                </a>
                <span className="time">2024-02-22</span>
              </li>

              <li>
                <a
                  href="/szsrmzf/bmdt/202402/fb233d1ea5c749cb86af810ae9b13e25.shtml"
                  target="_blank"
                  title="苏州市审计局启动新一年财政“同级审”工作"
                >
                  苏州市审计局启动新一年财政“同级审”工作
                </a>
                <span className="time">2024-02-21</span>
              </li>

              <li>
                <a
                  href="/szsrmzf/bmdt/202402/6723423024de4bab9d92e6c0c9217cb2.shtml"
                  target="_blank"
                  title="1月份苏州港口生产运行总体保持稳定"
                >
                  1月份苏州港口生产运行总体保持稳定
                </a>
                <span className="time">2024-02-21</span>
              </li>

              <li>
                <a
                  href="/szsrmzf/bmdt/202402/ea899bd3577042c585cfc6dff2019b88.shtml"
                  target="_blank"
                  title="2024年苏州交通计划完成投资291.5亿元"
                >
                  2024年苏州交通计划完成投资291.5亿元
                </a>
                <span className="time">2024-02-21</span>
              </li>
              <li>
                <a
                  href="/szsrmzf/bmdt/202402/ea899bd3577042c585cfc6dff2019b88.shtml"
                  target="_blank"
                  title="2024年苏州交通计划完成投资291.5亿元"
                >
                  2024年苏州交通计划完成投资291.5亿元
                </a>
                <span className="time">2024-02-21</span>
              </li>
              <li>
                <a
                  href="/szsrmzf/bmdt/202402/ea899bd3577042c585cfc6dff2019b88.shtml"
                  target="_blank"
                  title="2024年苏州交通计划完成投资291.5亿元"
                >
                  2024年苏州交通计划完成投资291.5亿元
                </a>
                <span className="time">2024-02-21</span>
              </li>
              <li>
                <a
                  href="/szsrmzf/bmdt/202402/ea899bd3577042c585cfc6dff2019b88.shtml"
                  target="_blank"
                  title="2024年苏州交通计划完成投资291.5亿元"
                >
                  2024年苏州交通计划完成投资291.5亿元
                </a>
                <span className="time">2024-02-21</span>
              </li>
              <li>
                <a
                  href="/szsrmzf/bmdt/202402/ea899bd3577042c585cfc6dff2019b88.shtml"
                  target="_blank"
                  title="2024年苏州交通计划完成投资291.5亿元"
                >
                  2024年苏州交通计划完成投资291.5亿元
                </a>
                <span className="time">2024-02-21</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <HomeHeaderBoxTwo>
        <TitleBox name="入驻流程" />
        <Steps
          current={1}
          items={[
            {
              title: "Finished",
              description,
            },
            {
              title: "In Progress",
              description,
              subTitle: "Left 00:00:08",
            },
            {
              title: "Waiting",
              description,
            },
          ]}
        />
      </HomeHeaderBoxTwo>
      <HomeHeaderBoxThree>
        <TitleBox name="产品展示" />
        <List
          className="product-list"
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={productListData}
          renderItem={(item) => (
            <List.Item className="product-item">
              <Card title={item.title}>
                <a
                  target="_blank"
                  href="javascript:void(0)"
                  title="新春走基层专题"
                  className="skipAutoFix"
                  rel="noreferrer"
                >
                  <div className="img-box">
                    <Image
                      width="100%"
                      src="error"
                      preview={false}
                      fallback="data:image/png;base64,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"
                    />
                  </div>
                </a>
              </Card>
            </List.Item>
          )}
        />
      </HomeHeaderBoxThree>
    </div>
  )
}
const HomeHeaderNavBox = styled.div`
  width: 100%;
  height: 320px;
  margin-bottom: 40px;
  color: #fff;
`

const HomeHeaderBoxTwo = styled.div`
  margin: auto;
  padding: 20px;
  width: 1200px;
  margin-bottom: 40px;
`
const HomeHeaderBoxThree = styled.div`
  margin: auto;
  padding: 20px;
  width: 1200px;
`
