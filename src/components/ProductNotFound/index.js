import React from "react"
import { NavLink } from "react-router-dom"
import texts from "../../common/texts.json"
import "./index.css"

const ProductNotFound = () => {
  return (
    <div className="product-not-found__container">
      <div className="product-not-found__info">
        <img
          atl="Producto no encontrado"
          src="/assets/img/not-found-product.png"
        ></img>
        <p>
          {texts.PRODUCT_DETAIL_PAGE.PRODUCT_NOT_FOUND_MESSAGE}
          <NavLink to="/">
            {texts.PRODUCT_DETAIL_PAGE.PRODUCT_NOT_FOUND_LINK_MESSAGE}
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default ProductNotFound
