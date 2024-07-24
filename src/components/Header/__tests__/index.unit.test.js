import { render, fireEvent } from "@testing-library/react"
import Header from "./../"

const mockNavigate = jest.fn()
const mockLocation = { path: "/items" }
const mockSearchParams = [{ get: () => "computador" }]
jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
    useLocation: () => mockLocation,
    useSearchParams: () => mockSearchParams,
  }
})

describe("Header tests", () => {
  const mockCategories = ["cat3", "cat2", "cat1"]
  it("Should render correctly", () => {
    const { container } = render(<Header />)
    expect(
      container.getElementsByClassName("header__search-input"),
    ).toBeTruthy()
  })

  it("Should call navigate when logo is clicked", () => {
    const { getByRole } = render(<Header />)
    fireEvent.click(
      getByRole("img", {
        name: /logo mercado libre/i,
      }),
    )
    expect(mockNavigate).toHaveBeenCalled()
  })

  it("Should call navigate when search button is clicked", () => {
    const { getByRole } = render(<Header />)
    const searchInputElement = getByRole("textbox")
    fireEvent.input(searchInputElement, { target: { value: "Computador" } })
    fireEvent.click(getByRole("button"))
    expect(mockNavigate).toHaveBeenCalled()
  })

  it("Should call navigate when enter key is pressed", () => {
    const { getByRole } = render(<Header />)
    const searchInputElement = getByRole("textbox")
    fireEvent.input(searchInputElement, { target: { value: "Computador" } })
    fireEvent.keyDown(searchInputElement, {
      key: "Enter",
      code: "Enter",
      charCode: 13,
    })
    expect(mockNavigate).toHaveBeenCalled()
  })
})
