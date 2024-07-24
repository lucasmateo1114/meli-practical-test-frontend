import { getCurrenciesFromSite } from "../currencies"

const mockAxiosResponse = jest.fn()
jest.mock("../../axiosWithRetry", () => {
  return () => ({
    get: mockAxiosResponse,
  })
})

const mockCurrenciesData = {
  data: {
    author: {
      name: "Lucas",
      lastname: "Sánchez",
    },
    currencies: [
      {
        id: "ARS",
        symbol: "$",
      },
      {
        id: "USD",
        symbol: "US$",
      },
    ],
  },
}

describe("Currencies client test", () => {
  it("should get data correctly", async () => {
    mockAxiosResponse.mockResolvedValue(mockCurrenciesData)
    const response = await getCurrenciesFromSite("id")
    expect(response.currencies.length).toBe(2)
  })

  it("should get error 404", async () => {
    mockAxiosResponse.mockRejectedValue({ response: { status: 404 } })
    const response = await getCurrenciesFromSite("id")
    expect(response.statusCode).toBe(404)
  })

  it("should get error 500", async () => {
    mockAxiosResponse.mockRejectedValue({ error: true })
    const response = await getCurrenciesFromSite("id")
    expect(response.statusCode).toBe(500)
  })
})
