import { render, fireEvent } from "@testing-library/react"
import ProductList from "./../"
import CurrenciesProvider from "../../../contexts/currenciesContext"
import { useNavigate } from "react-router-dom"

const mockNavigate = jest.fn()
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  }
})

jest.mock("../../../common/clients/currencies", () => {
  return {
    getCurrenciesFromSite: () => mockCurrencies,
  }
})

const mockCurrencies = [
  {
    id: "ARS",
    symbol: "$",
  },
  {
    id: "USD",
    symbol: "US$",
  },
]

const mockProducts = [
  {
    id: "MLA1409538770",
    title: "Motorola Moto G23 De 128 Gb 4 Gb Ram Blanco",
    price: {
      currency: "ARS",
      amount: 327999,
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_602130-MLA74807965323_022024-I.jpg",
    condition: "new",
    free_shipping: true,
    brand: "Motorola",
  },
  {
    id: "MLA1383577039",
    title: "Motorola Moto G13 128 Gb Rosa Suave 4 Gb Ram",
    price: {
      currency: "USD",
      amount: 299999,
      decimals: 0,
    },
    picture: "http://http2.mlstatic.com/D_793201-MLU74074058468_012024-I.jpg",
    condition: "new",
    free_shipping: true,
    brand: "Motorola",
  },
]

describe("ProductList tests", () => {
  it("Should render correctly", () => {
    const { container } = render(
      <CurrenciesProvider>
        <ProductList products={mockProducts} />
      </CurrenciesProvider>,
    )
    expect(
      container.getElementsByClassName("product-item-list__container").length,
    ).toEqual(2)
  })
})
