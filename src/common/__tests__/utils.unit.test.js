import { capitalize, getCurrencySymbol, getDecimals } from "../utils"

describe("utils test", () => {
  it("Should return capitalized text", () => {
    const capitalized = capitalize("computador")
    expect(capitalized).toBe("Computador")
  })

  it("getDecimals should return string of decimal part", () => {
    const decimals = getDecimals(0.23)
    expect(decimals).toBe("23")
  })

  it("getDecimals should return default decimal string when number is not provided", () => {
    const decimals = getDecimals()
    expect(decimals).toBe("00")
  })

  it("getDecimals should return default decimal string  when number has not decimals", () => {
    const decimals = getDecimals(0)
    expect(decimals).toBe("00")
  })

  it("getCurrencySymbol should return default symbol when not currencies provided", () => {
    const currencySymbol = getCurrencySymbol("USD")
    expect(currencySymbol).toBe("$")
  })

  it("getCurrencySymbol should return default symbol when currency doesnt match with available currencies", () => {
    const currencySymbol = getCurrencySymbol("USD", [])
    expect(currencySymbol).toBe("$")
  })

  it("getCurrencySymbol should return correct symbol", () => {
    const availableCurrencies = [
      {
        id: "ARS",
        symbol: "$",
      },
      {
        id: "USD",
        symbol: "US$",
      },
    ]
    const currencySymbol = getCurrencySymbol("USD", availableCurrencies)
    expect(currencySymbol).toBe("US$")
  })
})
