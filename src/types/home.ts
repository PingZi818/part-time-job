export interface Banner {
  id: string
  title: string
  bannerImgUrl: string
  url: string
}
export interface ServerData {
  id: string
  typeName: string
  typeValue: string
}
export interface Account {
  id: string
  title: string
  description: string
  url: string
  publishDate: string
  year: string
  month: string
  day: string
}
export interface News {
  id: string
  title: string
  description: string
  url: string
  publishDate: string
  year: string
  month: string
  day: string
}
export interface Process {
  id: string
  stepTitle: string
  description: string
  secondDescription: string
}
export interface Product {
  id: string
  title: string
  description: string
  imgUrl: string
}
