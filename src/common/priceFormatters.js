const ARSFormatter = (number) => {
  return number
    ? number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
    : "Precio no disponible"
}

const USDFormatter = (number) => {
  return number
    ? number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    : "Precio no disponible"
}

const getPriceFormatter = (currency) => {
  switch (currency) {
    case "ARS":
      return ARSFormatter
    case "USD":
      return USDFormatter
    default:
      return (number) => number
  }
}

export default getPriceFormatter
