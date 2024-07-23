import React, { createContext, useState, useEffect } from "react"
import getConfig from "../common/getConfig"
import { getCurrenciesFromSite } from "../common/clients/currencies"
const { DEFAULT_SITE_ID } = getConfig

export const CurrenciesContext = createContext()

const CurrenciesProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState()

  useEffect(() => {
    const getCurrencies = async () => {
      const { currencies: incomingCurrencies } =
        await getCurrenciesFromSite(DEFAULT_SITE_ID)
      setCurrencies(incomingCurrencies)
    }
    getCurrencies()
  }, [])

  return (
    <CurrenciesContext.Provider value={{ currencies }}>
      {children}
    </CurrenciesContext.Provider>
  )
}

export default CurrenciesProvider
