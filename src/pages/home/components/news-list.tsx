import React from "react"
import "./styles/news-list.css"
import Paragraph from "antd/es/typography/Paragraph"
import { useNewsList } from "api/home"
import { News } from "types/home"
export const NewsListPart = (props: any) => {
  const { data: newsList } = useNewsList()
  return (
    <div className="news-box">
      <div className="news-box-list">
        {newsList?.map((v) => (
          <NewsItem key={v.id} news={v} />
        ))}
      </div>
    </div>
  )
}
export const NewsItem = ({ news }: { news: News }) => {
  return (
    <div className="news-item">
      <div className="time-inner-box">
        <p>
          {news.month}/{news.day}
        </p>
        <div className="year-value">{news.year}</div>
      </div>
      <div className="news-content-box">
        <div className="news-title-inner">{news.title}</div>
        <Paragraph className="news-content-inner" ellipsis={{ rows: 2 }}>
          {news.description}
        </Paragraph>
      </div>
    </div>
  )
}
