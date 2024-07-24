import { render } from "@testing-library/react"
import NotFoundPage from "./../"

jest.mock("react-router-dom", () => {
  return {
    NavLink: jest.fn(),
  }
})

jest.mock("../../../components/SEO", () => {
  return {
    __esModule: true,
    default: () => {
      return <></>
    },
  }
})

describe("NotFoundPage tests", () => {
  it("Should render correctly", () => {
    const { getByText } = render(<NotFoundPage />)
    expect(getByText("Página no encontrada.")).toBeTruthy()
  })
})
