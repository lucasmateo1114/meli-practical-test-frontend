import React from "react"
import SEO from "../../components/SEO"
import { NavLink } from "react-router-dom"
import texts from "../../common/texts.json"
import "./index.css"

const NotFoundPage = () => {
  return (
    <>
      <SEO
        title={texts.SEO.NOT_FOUND_PAGE.TITLE}
        description={texts.SEO.NOT_FOUND_PAGE.DESCRIPTION}
        index={false}
      />
      <div className="not-found-page__container">
        <div className="not-found-page__info">
          <img
            alt="Página no encontrada"
            src="/assets/img/no-encontrado.png"
          ></img>
          <p>
            {texts.NOT_FOUND_PAGE.NOT_FOUND_MESSAGE}
            <NavLink to="/">
              {texts.NOT_FOUND_PAGE.NOT_FOUND_LINK_MESSAGE}
            </NavLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
