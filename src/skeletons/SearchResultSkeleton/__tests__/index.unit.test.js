import { render } from "@testing-library/react"
import SearchResultSkeleton from "./../"

describe("SearchResultSkeleton tests", () => {
  it("Should render correctly", () => {
    const { container } = render(<SearchResultSkeleton />)
    expect(
      container.getElementsByClassName("breadcrumb-skeleton__container"),
    ).toBeTruthy()
    expect(
      container.getElementsByClassName("product-item-list-skeleton__container"),
    ).toBeTruthy()
  })
})
