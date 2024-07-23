import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./index.css"

const BreadCrumbSkeleton = () => {
  return (
    <div className="breadcrumb-skeleton__container">
      <Skeleton count={1} width={90}></Skeleton>
      <span className="breadcrum-skeleton__arrow">{" > "}</span>
      <Skeleton count={1} width={90}></Skeleton>
      <span className="breadcrum-skeleton__arrow">{" > "}</span>
      <Skeleton count={1} width={90}></Skeleton>
    </div>
  )
}

export default BreadCrumbSkeleton
