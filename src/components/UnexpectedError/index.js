import React from "react"
import { NavLink } from "react-router-dom"
import texts from "../../common/texts.json"
import "./index.css"

const UnexpectedError = () => {
  return (
    <div className="unexpected-error__container">
      <div className="unexpected-error__info">
        <img
          alt="Ha ocurrido un error"
          src="/assets/img/unexpected-error.png"
        ></img>
        <p>
          {texts.UNEXPECTED_ERROR_MESSAGE}
          <NavLink to="/">{texts.UNEXPECTED_ERROR_LINK_MESSAGE}</NavLink>
        </p>
      </div>
    </div>
  )
}

export default UnexpectedError
