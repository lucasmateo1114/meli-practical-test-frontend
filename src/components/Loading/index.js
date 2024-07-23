import React from "react"
import texts from "../../common/texts.json"
import "./index.css"

const Loading = () => {
  return (
    <div className="loading__container">
      <div className="loading__info">
        <img atl="Cargando" src="/assets/img/loading.gif"></img>
        <p>{texts.LOADING_TEXT}</p>
      </div>
    </div>
  )
}

export default Loading
