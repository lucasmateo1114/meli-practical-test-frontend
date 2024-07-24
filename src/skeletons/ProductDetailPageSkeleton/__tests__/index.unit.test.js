import { render, waitFor } from "@testing-library/react"
import ProdutDetailPageSkeleton from "./../"
import useWindowSize from "../../../hooks/useWindowSize"

jest.mock("../../../hooks/useWindowSize", () => jest.fn())

describe("ProdutDetailPageSkeleton tests", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("Should render correctly desktop product detail", async () => {
    useWindowSize.mockReturnValue({
      isMobile: false,
    })
    const { container } = render(<ProdutDetailPageSkeleton />)
    expect(
      container.getElementsByClassName("product-detail-skeleton__container")
        .length,
    ).toBe(1)
    expect(
      container.getElementsByClassName(
        "product-detail-mobile-skeleton__container",
      ).length,
    ).toBe(0)
  })

  it("Should render correctly mobile product detail", async () => {
    useWindowSize.mockReturnValue({
      isMobile: true,
    })
    const { container } = render(<ProdutDetailPageSkeleton />)
    expect(
      container.getElementsByClassName("product-detail-skeleton__container")
        .length,
    ).toBe(0)
    expect(
      container.getElementsByClassName(
        "product-detail-mobile-skeleton__container",
      ).length,
    ).toBe(1)
  })
})
