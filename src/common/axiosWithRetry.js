import axios from "axios"
import axiosRetry from "axios-retry"

const retryConfig = {
  shouldResetTimeout: true,
  retryCondition: () => true,
}

const axiosWithRetry = ({ baseURL, timeout, retries = 2 }) => {
  const axiosInstance = axios.create({
    baseURL,
    timeout,
  })
  axiosRetry(axiosInstance, { ...retryConfig, retries })
  return axiosInstance
}

export default axiosWithRetry
