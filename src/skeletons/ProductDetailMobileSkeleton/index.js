import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import texts from "../../common/texts.json"
import "./index.css"

const ProductDetailMobileSkeleton = () => {
  return (
    <div className="product-detail-mobile-skeleton__container">
      <div className="product-detail-mobile-skeleton__title">
        <Skeleton count={2}></Skeleton>
      </div>
      <div className="product-detail-mobile-skeleton__condition">
        <Skeleton count={1} width={75}></Skeleton>
      </div>

      <div className="product-detail-mobile-skeleton__image-container">
        <Skeleton count={1} width={300} height={300}></Skeleton>
      </div>

      <div className="product-detail-mobile-skeleton__price">
        <Skeleton count={1} width={120}></Skeleton>
      </div>
      <button className="product-detail-mobile-skeleton__buy-button">
        {texts.PRODUCT_DETAIL_PAGE.BUY_BUTTON_TEXT}
      </button>

      <div className="product-detail-mobile-skeleton__description">
        <div className="product-detail-mobile-skeleton__description-title">
          <Skeleton count={1}></Skeleton>
        </div>
        <div className="product-detail-mobile-skeleton__description-value">
          <Skeleton count={6}></Skeleton>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailMobileSkeleton
