import React from "react"
import RouterSwitch from "./RoutesSwitch"
import { SkeletonTheme } from "react-loading-skeleton"
import { HelmetProvider } from "react-helmet-async"
import CurrenciesProvider from "../contexts/currenciesContext"

const Routes = (props) => {
  return (
    <SkeletonTheme baseColor="#E0E0E0" highlightColor="#EEEEEE">
      <HelmetProvider>
        <CurrenciesProvider>
          <RouterSwitch></RouterSwitch>
        </CurrenciesProvider>
      </HelmetProvider>
    </SkeletonTheme>
  )
}

export default Routes
