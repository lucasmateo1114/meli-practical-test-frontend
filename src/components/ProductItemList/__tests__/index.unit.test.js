import { render, fireEvent } from "@testing-library/react"
import ProductItemList from "./../"
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

const mockProduct = {
  id: "MLA1455049388",
  title: "Televisor Samsung Un43t5300agczb Smart Tv Pantalla 43",
  price: {
    currency: "ARS",
    amount: 539999,
    decimals: 0,
  },
  picture: "http://http2.mlstatic.com/D_792738-MLU76917933471_062024-I.jpg",
  condition: "new",
  free_shipping: true,
  brand: "Samsung",
}

describe("ProductDetail tests", () => {
  it("Should render correctly", () => {
    const { getByText } = render(
      <CurrenciesProvider>
        <ProductItemList product={mockProduct} />
      </CurrenciesProvider>,
    )
    expect(
      getByText("Televisor Samsung Un43t5300agczb Smart Tv Pantalla 43"),
    ).toBeInTheDocument()
  })

  it("Should call navigate when click title", () => {
    const { getByText } = render(
      <CurrenciesProvider>
        <ProductItemList product={{ ...mockProduct, free_shipping: false }} />
      </CurrenciesProvider>,
    )
    fireEvent.click(
      getByText("Televisor Samsung Un43t5300agczb Smart Tv Pantalla 43"),
    )
    expect(mockNavigate).toHaveBeenCalled()
  })
})
