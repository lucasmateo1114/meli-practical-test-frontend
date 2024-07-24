import React, { act } from "react"
import { render, waitFor } from "@testing-library/react"
import ProductDetailPage from "./../"
import { getItemById } from "../../../common/clients/items"
import CurrenciesProvider from "../../../contexts/currenciesContext"
import { useNavigate, useSearchParams } from "react-router-dom"

const mockNavigate = jest.fn()
const mockLocation = { path: "/items" }
const mockSearchParams = [{ get: () => "computador" }]
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
    useSearchParams: () => mockSearchParams,
    NavLink: jest.fn(),
    useParams: () => ({ id: "id" }),
  }
})

jest.mock("../../../common/clients/items", () => {
  return {
    getItemById: jest.fn(),
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

jest.mock("../../../common/clients/currencies", () => {
  return {
    getCurrenciesFromSite: () => mockCurrencies,
  }
})

jest.mock("react-helmet-async", () => {
  return {
    Helmet: ({ children }) => {
      return <>{children}</>
    },
  }
})

const mockItem = {
  author: {
    name: "Lucas",
    lastname: "Sánchez",
  },
  item: {
    id: "MLA1857516014",
    title:
      "Ordenador Pc Cpu Core I5 16 Gb Memoria Ram Ssd 480 Gb Wifi Windows 10",
    price: {
      currency: "ARS",
      amount: 347337,
      decimals: 0.48,
    },
    picture: "http://http2.mlstatic.com/D_953893-MLU74993269248_032024-I.jpg",
    condition: "new",
    free_shipping: true,
    sold_quantity: 0,
    description: "description",
    categories: ["Computación", "PC de Escritorio", "PC"],
  },
}

describe("ProductDetailPage tests", () => {
  it("Should render correctly", async () => {
    getItemById.mockReturnValue(mockItem)
    let outContainer

    await act(async () => {
      const { container } = render(
        <CurrenciesProvider>
          <ProductDetailPage />
        </CurrenciesProvider>,
      )
      outContainer = container
    })

    expect(
      outContainer.getElementsByClassName("product-detail__container"),
    ).toBeTruthy()
  })

  it("Should show not results found", async () => {
    getItemById.mockReturnValue({ error: true, error: 404 })
    let outGetByText

    await act(async () => {
      const { getByText } = render(
        <CurrenciesProvider>
          <ProductDetailPage />
        </CurrenciesProvider>,
      )
      outGetByText = getByText
    })

    waitFor(() => {
      expect(outGetByText(/Producto no encontrado/i)).toBeTruthy()
    })
  })

  it("Should show unexpected exception", async () => {
    getItemById.mockReturnValue({ error: true, error: 500 })
    let outGetByText

    await act(async () => {
      const { getByText } = render(
        <CurrenciesProvider>
          <ProductDetailPage />
        </CurrenciesProvider>,
      )
      outGetByText = getByText
    })

    waitFor(() => {
      expect(
        outGetByText(
          /Ha ocurrido un error inesperado, lo solucionaremos lo más pronto posible/i,
        ),
      ).toBeTruthy()
    })
  })
})
