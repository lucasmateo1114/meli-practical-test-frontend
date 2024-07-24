import { render } from "@testing-library/react"
import CommonLayout from "./../"

jest.mock("../../../components/Header", () => {
  return {
    __esModule: true,
    default: () => {
      return <> Header </>
    },
  }
})

jest.mock("react-router-dom", () => {
  return {
    Outlet: () => {
      return <> Outlet Element</>
    },
  }
})

describe("CommonLayout tests", () => {
  it("Should render correctly", () => {
    const { getByText } = render(<CommonLayout />)
    expect(getByText("Header")).toBeInTheDocument()
    expect(getByText("Outlet Element")).toBeInTheDocument()
  })
})
