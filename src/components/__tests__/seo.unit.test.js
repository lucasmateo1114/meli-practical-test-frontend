import { render } from "@testing-library/react"
import SEO from "./../SEO"

jest.mock("react-helmet-async", () => {
  return {
    Helmet: ({ children }) => {
      return <>{children}</>
    },
  }
})

const mockSeoValues = {
  title: "titulo",
  description: "descripción",
  image: "http://image.com/",
  keywords: "keyword1, keyword2",
  index: true,
}

describe("SEO tests", () => {
  it("Should render correctly", () => {
    const { container } = render(<SEO {...mockSeoValues} />)
    expect(container.getElementsByTagName("title")).toBeTruthy()
  })

  it("Should render correctly using title as description", () => {
    const seoValues = { ...mockSeoValues, description: undefined, index: false }
    const { container } = render(<SEO {...seoValues} />)
    expect(container.getElementsByTagName("title")).toBeTruthy()
  })
})
