import { render } from "@testing-library/react"
import Breadcrumb from "./../"

describe("Bredcrumb tests", () => {
  const mockCategories = ["cat3", "cat2", "cat1"]
  it("Should render correctly", () => {
    const { container } = render(<Breadcrumb categories={mockCategories} />)
    expect(
      container.getElementsByClassName("breadcrumb__category--last-level"),
    ).toBeTruthy()
    expect(container.getElementsByTagName("span").length).toBe(3)
  })
})
