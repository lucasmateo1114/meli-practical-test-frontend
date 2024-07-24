import axiosWithRetry from "../axiosWithRetry"
import axios from "axios"

jest.mock("axios-retry", () => (instance, config) => {
  config.retryCondition()
})

jest.mock("axios", () => {
  return {
    create: jest.fn(),
  }
})

describe("axiosWithRetry tests", () => {
  it("axios.create should have benn called", () => {
    axiosWithRetry({ baseURL: "", timeout: "", retries: 2 })
    expect(axios.create).toHaveBeenCalled()
  })
})
