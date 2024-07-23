import React, { useContext } from "react"
import PropTypes from "prop-types"
import getPriceFormatter from "../../common/priceFormatters"
import { getDecimals, getCurrencySymbol } from "../../common/utils"
import { CurrenciesContext } from "../../contexts/currenciesContext"
import texts from "../../common/texts.json"
import "./index.css"

const ProductDetailMobile = ({ product }) => {
  const { currencies } = useContext(CurrenciesContext)
  const { title, picture, condition, description, sold_quantity, price } =
    product
  const priceFormatter = getPriceFormatter(price.currency)
  const currencySymbol = getCurrencySymbol(price.currency, currencies)

  return (
    <div className="product-detail-mobile__container">
      <div className="product-detail-mobile__title">{title}</div>
      <div className="product-detail-mobile__condition">
        {texts.CONDITION[condition]}{" "}
        {sold_quantity > 0
          ? `- ${sold_quantity} ${texts.PRODUCT_DETAIL_PAGE.SOLD_OUT_TEXT}`
          : ""}
      </div>

      <div className="product-detail-mobile__image-container">
        <img alt={title} src={picture}></img>
      </div>

      <div className="product-detail-mobile__price">
        {currencySymbol} {priceFormatter(price.amount)}
        <span className="product-detail-mobile__price-decimals">
          {getDecimals(price.decimals)}
        </span>
      </div>
      <button className="product-detail-mobile__buy-button">
        {texts.PRODUCT_DETAIL_PAGE.BUY_BUTTON_TEXT}
      </button>

      <div className="product-detail-mobile__description">
        <div className="product-detail-mobile__description-title">
          {texts.PRODUCT_DETAIL_PAGE.PRODUCT_DESCRIPTION_TITLE}
        </div>
        <div className="product-detail-mobile__description-value">
          {description}
        </div>
      </div>
    </div>
  )
}

ProductDetailMobile.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductDetailMobile
