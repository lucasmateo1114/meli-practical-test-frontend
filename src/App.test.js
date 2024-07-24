import { act } from "react"
import { render } from "@testing-library/react"
import App from "./App"

jest.mock("./common/clients/currencies", () => {
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

describe("App tests", () => {
  it("Should render correctly", async () => {
    let outContainer

    await act(async () => {
      const { container } = render(<App />)
      outContainer = container
    })
    expect(
      outContainer.getElementsByClassName("header__search-input"),
    ).toBeTruthy()
  })
})
