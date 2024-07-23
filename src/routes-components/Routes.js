import React from "react"
import RouterSwitch from "./RoutesSwitch"
import CurrenciesProvider from "../contexts/currenciesContext"

const Routes = (props) => {
  return (
    <CurrenciesProvider>
      <RouterSwitch></RouterSwitch>
    </CurrenciesProvider>
  )
}

export default Routes
