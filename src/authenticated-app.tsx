import React from "react"
import { Route, Routes } from "react-router"
import { HomePage } from "pages/home"
import { CompanyPage } from "pages/company"
import { SolutionPage } from "pages/solution"
import { AboutPage } from "pages/about"
import LayoutBox from "components/layout"

export default function AuthenticatedApp() {
  return (
    <LayoutBox
      content={
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"home"} element={<HomePage />} />
          <Route path={"company"} element={<CompanyPage />} />
          <Route path={"solution"} element={<SolutionPage />} />
          <Route path={"about"} element={<AboutPage />} />
        </Routes>
      }
    ></LayoutBox>
  )
}
