import React from "react"
import { NavLink } from "react-router-dom"
import texts from "../../common/texts.json"
import "./index.css"

const NotResultsFound = () => {
  return (
    <div className="no-results-found__container">
      <div className="no-results-found__info">
        <img
          alt="Producto no encontrado"
          src="/assets/img/not-found-product.png"
        ></img>
        <p>
          {texts.SEARCH_RESULT.NO_RESULTS_MESSAGE}
          <NavLink to="/">
            {texts.SEARCH_RESULT.NO_RESULTS_LINK_MESSAGE}
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default NotResultsFound
