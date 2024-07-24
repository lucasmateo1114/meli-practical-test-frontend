import React, { Fragment } from "react"
import PropTypes from "prop-types"
import ProductItemList from "../ProductItemList"
import getConfig from "../../common/getConfig"
import "./index.css"

const { RESULTS_QUANTITY } = getConfig

const ProductList = ({ products }) => {
  return (
    <div className="product-list__container">
      {products?.slice(0, RESULTS_QUANTITY).map((product) => {
        return (
          <Fragment key={product.id}>
            <ProductItemList product={product}></ProductItemList>
            <hr></hr>
          </Fragment>
        )
      })}
    </div>
  )
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
}

export default ProductList
