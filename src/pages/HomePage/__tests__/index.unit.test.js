import { render } from "@testing-library/react"
import HomePage from "./../"

jest.mock("react-helmet-async", () => {
  return {
    Helmet: ({ children }) => {
      return <>{children}</>
    },
  }
})

describe("HomaPage test", () => {
  it("should get data correctly", async () => {
    const { container } = render(<HomePage></HomePage>)
    expect(container.getElementsByTagName("title").length).toBe(1)
  })
})
