import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import getPriceFormatter from "../../common/priceFormatters"
import { CurrenciesContext } from "../../contexts/currenciesContext"
import { getCurrencySymbol } from "../../common/utils"
import texts from "../../common/texts.json"
import "./index.css"

const ProductItemList = ({ product }) => {
  const { currencies } = useContext(CurrenciesContext)
  const navigate = useNavigate()
  const {
    id,
    title,
    free_shipping,
    picture,
    price: { currency, amount },
    condition,
    brand,
  } = product
  const priceFormatter = getPriceFormatter(currency)
  const currencySymbol = getCurrencySymbol(currency, currencies)

  const handleItemClick = () => {
    navigate(`/items/${id}`)
  }

  return (
    <div className="product-item-list__container">
      <div className="product-item-list__image-container">
        <img
          alt={title}
          className="product-item-list__clickable-element"
          onClick={handleItemClick}
          src={picture}
        ></img>
      </div>
      <div className="product-item-list__product-info-container">
        <div className="product-item-list__product-price">
          {currencySymbol} {priceFormatter(amount)}{" "}
          {free_shipping ? (
            <img alt="Envío gratis" src="/assets/img/ic_shipping.png"></img>
          ) : null}
        </div>
        <div className="product-item-list__product-description">
          <div
            onClick={handleItemClick}
            className="product-item-list__clickable-element"
          >
            {title}
          </div>
          <div>{texts.CONDITION[condition]}</div>
        </div>
      </div>
      <div className="product-item-list__place">{brand}</div>
    </div>
  )
}

ProductItemList.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductItemList
