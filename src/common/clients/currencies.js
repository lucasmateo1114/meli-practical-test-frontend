import axiosWithRetry from "../axiosWithRetry"
import getConfig from "../getConfig"
const { BFF_BASE_URL } = getConfig

export const getCurrenciesFromSite = async (siteId) => {
  try {
    const axios = axiosWithRetry({ baseURL: BFF_BASE_URL, timeout: 3000 })
    const { data } = await axios.get(`/api/v1/currency/${siteId}`)
    return data
  } catch (error) {
    return {
      error: true,
      statusCode: error?.response?.status || 500,
    }
  }
}
