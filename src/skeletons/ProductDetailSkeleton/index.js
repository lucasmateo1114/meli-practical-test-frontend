import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import texts from "../../common/texts.json"
import "./index.css"

const ProductDetailSkeleton = () => {
  return (
    <div className="product-detail-skeleton__container">
      <div className="product-detail-skeleton__left-section">
        <div className="product-detail-skeleton__image-container">
          <Skeleton count={1} width={400} height={400}></Skeleton>
        </div>
        <div className="product-detail-skeleton__description">
          <div className="product-detail-skeleton__description-title">
            <Skeleton count={1}></Skeleton>
          </div>
          <div className="product-detail-skeleton__description-value">
            <Skeleton count={8}></Skeleton>
          </div>
        </div>
      </div>

      <div className="product-detail-skeleton__rigth-section">
        <div className="product-detail-skeleton__button-section">
          <div className="product-detail-skeleton__condition">
            <Skeleton count={1} width={60}></Skeleton>
          </div>
          <div className="product-detail-skeleton__title">
            <Skeleton count={4}></Skeleton>
          </div>
          <div className="product-detail-skeleton__price">
            <Skeleton count={1}></Skeleton>
          </div>
          <button
            disabled={true}
            className="product-detail-skeleton__buy-button"
          >
            {texts.PRODUCT_DETAIL_PAGE.BUY_BUTTON_TEXT}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSkeleton
