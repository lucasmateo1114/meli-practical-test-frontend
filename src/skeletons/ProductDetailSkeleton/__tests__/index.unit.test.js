import { render } from "@testing-library/react"
import ProductDetailSkeleton from "./../"

describe("ProductDetailSkeleton tests", () => {
  it("Should render correctly", () => {
    const { container } = render(<ProductDetailSkeleton />)
    expect(
      container.getElementsByClassName("product-detail-skeleton__container"),
    ).toBeTruthy()
  })
})
