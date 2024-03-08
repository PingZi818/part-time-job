import React from "react"
import "./styles/banner.css"
import { Carousel } from "antd"
import { useBanners } from "api/home"
export const BannerPart = (props: any) => {
  const { data: list } = useBanners()
  return (
    <div className="carousel-box">
      <Carousel autoplay>
        {list?.map((item) => (
          <img
            height="320px"
            width="100%"
            src={item.bannerImgUrl}
            alt={item.title}
          />
        ))}
      </Carousel>
    </div>
  )
}
