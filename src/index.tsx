import "./wdyr"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "antd/dist/antd.less"
import { AppProviders } from "context"
import { Profiler } from "components/profiler"

ReactDOM.render(
  <React.StrictMode>
    <Profiler id={"Root App"} phases={["mount"]}>
      <AppProviders>
        <App />
      </AppProviders>
    </Profiler>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
