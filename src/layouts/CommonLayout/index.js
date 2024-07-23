import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import "./index.css"

const CommonLayout = () => {
  return (
    <div className="common-layout__container">
      <Header></Header>
      <div className="common-layout__content">
        <Outlet />
      </div>
    </div>
  )
}

export default CommonLayout
