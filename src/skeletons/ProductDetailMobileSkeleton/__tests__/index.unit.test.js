import { render } from "@testing-library/react"
import ProductDetailMobileSkeleton from "./../"

describe("ProductDetailMobileSkeleton tests", () => {
  it("Should render correctly", () => {
    const { container } = render(<ProductDetailMobileSkeleton />)
    expect(
      container.getElementsByClassName(
        "product-detail-mobile-skeleton__container",
      ),
    ).toBeTruthy()
  })
})
