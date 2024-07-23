export const getDecimals = (number) => {
  if (!number) {
    return "00"
  }
  if (number === 0) {
    return "00"
  }
  return number.toFixed(2).substring(2)
}

export const getCurrencySymbol = (currency, availableCurrencies) => {
  if (!availableCurrencies) {
    return "$"
  }
  const currencyObject = availableCurrencies.filter(
    ({ id }) => id === currency,
  )[0]
  if (!currencyObject) {
    return "$"
  }
  return currencyObject.symbol
}

export const capitalize = (text) => {
  const textLower = text.toLowerCase()
  return textLower.charAt(0).toUpperCase() + textLower.slice(1)
}
