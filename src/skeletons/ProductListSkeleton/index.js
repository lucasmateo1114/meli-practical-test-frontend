import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "./index.css"

const ProductListSkeleton = () => {
  const Item = () => {
    return (
      <div className="product-item-list-skeleton__container">
        <div className="product-item-list-skeleton__image-container">
          <Skeleton count={1}></Skeleton>
        </div>
        <div className="product-item-list-skeleton__product-info-container">
          <div className="product-item-list-skeleton__product-price">
            <Skeleton count={1}></Skeleton>
          </div>
          <div className="product-item-list-skeleton__product-description--title">
            <Skeleton count={1}></Skeleton>
          </div>
          <div className="product-item-list-skeleton__product-description--condition">
            <Skeleton count={1}></Skeleton>
          </div>
        </div>
        <div className="product-item-list-skeleton__place">
          <Skeleton count={1} width={70}></Skeleton>
        </div>
      </div>
    )
  }

  return (
    <div className="product-list-skeleton__container">
      <div>
        <Item></Item>
        <hr></hr>
        <Item></Item>
        <hr></hr>
        <Item></Item>
        <hr></hr>
        <Item></Item>
        <hr></hr>
      </div>
    </div>
  )
}

export default ProductListSkeleton
