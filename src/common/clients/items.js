import axiosWithRetry from "../axiosWithRetry"
import getConfig from "../getConfig"
const { BFF_BASE_URL } = getConfig

export const searchItems = async (term) => {
  try {
    const axios = axiosWithRetry({ baseURL: BFF_BASE_URL, timeout: 3000 })
    const { data } = await axios.get(`/api/v1/items?q=${term}`)
    return data
  } catch (error) {
    return {
      error: true,
      statusCode: error?.response?.status || 500,
    }
  }
}

export const getItemById = async (itemId) => {
  try {
    const axios = axiosWithRetry({ baseURL: BFF_BASE_URL, timeout: 3000 })
    const { data } = await axios.get(`/api/v1/items/${itemId}`)
    return data
  } catch (error) {
    return {
      error: true,
      statusCode: error?.response?.status || 500,
    }
  }
}
