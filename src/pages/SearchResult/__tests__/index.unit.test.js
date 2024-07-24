import React, { act } from "react"
import { render } from "@testing-library/react"
import SarchResult from "./../"
import { searchItems } from "../../../common/clients/items"
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
  }
})

jest.mock("../../../common/clients/items", () => {
  return {
    searchItems: jest.fn(),
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

const mockItems = {
  author: {
    name: "Lucas",
    lastname: "Sánchez",
  },
  categories: ["Computación", "PC de Escritorio", "PC"],
  items: [
    {
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
      brand: "Intel",
    },
    {
      id: "MLA1734161474",
      title: "Computadora Notebook Core I5 Economica Ideal Trabajo Estudio",
      price: {
        currency: "ARS",
        amount: 315000,
        decimals: 0,
      },
      picture: "http://http2.mlstatic.com/D_603993-MLA76963013069_062024-I.jpg",
      condition: "new",
      free_shipping: true,
      brand: "EXO",
    },
  ],
}

describe("SarchResult tests", () => {
  it("Should render correctly", async () => {
    searchItems.mockReturnValue(mockItems)
    let outContainer

    await act(async () => {
      const { container } = render(
        <CurrenciesProvider>
          <SarchResult />
        </CurrenciesProvider>,
      )
      outContainer = container
    })

    expect(
      outContainer.getElementsByClassName("search-result__container"),
    ).toBeTruthy()
  })

  it("Should show not results found", async () => {
    searchItems.mockReturnValue({ ...mockItems, items: [] })
    let outGetByText

    await act(async () => {
      const { getByText } = render(
        <CurrenciesProvider>
          <SarchResult />
        </CurrenciesProvider>,
      )
      outGetByText = getByText
    })

    expect(
      outGetByText(/No se hallaron resultados, realiza otra busqueda/i),
    ).toBeTruthy()
  })

  it("Should show unexpected exception", async () => {
    searchItems.mockReturnValue({ error: true, statusCode: 500 })
    let outGetByText

    await act(async () => {
      const { getByText } = render(
        <CurrenciesProvider>
          <SarchResult />
        </CurrenciesProvider>,
      )
      outGetByText = getByText
    })

    expect(
      outGetByText(
        /Ha ocurrido un error inesperado, lo solucionaremos lo más pronto posible/i,
      ),
    ).toBeTruthy()
  })
})
