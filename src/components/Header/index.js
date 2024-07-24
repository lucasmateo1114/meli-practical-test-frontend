import React, { useState, useEffect } from "react"
import { useNavigate, useLocation, useSearchParams } from "react-router-dom"
import texts from "./../../common/texts.json"
import "./index.css"

const Header = (props) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const searchTermParam = searchParams.get("search")
  const [searchTerm, setSearchTerm] = useState(searchTermParam || "")
  const shouldGoToResultsView = searchTerm !== ""

  const goToItemsPage = () => {
    if (shouldGoToResultsView) {
      navigate(`/items?search=${searchTerm}`)
    }
  }

  const handleOnChangeInputValue = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleOnClickButton = () => {
    goToItemsPage()
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      goToItemsPage()
    }
  }

  const handleOnClickLogo = () => {
    navigate("/")
  }

  useEffect(() => {
    if (pathname !== "/items") {
      setSearchTerm("")
    } else {
      setSearchTerm(searchTermParam)
    }
  }, [pathname])

  return (
    <div className="header__container">
      <div className="header__content">
        <div className="header__logo">
          <img
            alt="Logo Mercado Libre"
            onClick={handleOnClickLogo}
            src="/assets/img/logo.png"
          ></img>
        </div>
        <div className="header__search-input">
          <input
            onChange={handleOnChangeInputValue}
            onKeyDown={handleKeyPress}
            placeholder={texts.HEADER.SEARCH_INPUT_PLACE_HOLDER}
            value={searchTerm}
          ></input>
          <button onClick={handleOnClickButton}></button>
        </div>
      </div>
    </div>
  )
}

export default Header
