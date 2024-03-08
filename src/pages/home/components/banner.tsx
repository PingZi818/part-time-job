import React from "react"
import "./styles/banner.css"
import { Carousel } from "antd"
export const BannerPart = (props: any) => {
  return (
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
  )
}
