import React from "react"
import RouterSwitch from "./RoutesSwitch"
import { HelmetProvider } from "react-helmet-async"
import CurrenciesProvider from "../contexts/currenciesContext"

const Routes = (props) => {
  return (
    <HelmetProvider>
      <CurrenciesProvider>
        <RouterSwitch></RouterSwitch>
      </CurrenciesProvider>
    </HelmetProvider>
  )
}

export default Routes
