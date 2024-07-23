import { useEffect, useState } from "react"
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
    isMobile: window.innerWidth <= 767,
  })

  useEffect(() => {
    const windowSizeHandler = () => {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
        isMobile: window.innerWidth <= 767,
      })
    }
    window.addEventListener("resize", windowSizeHandler)

    return () => {
      window.removeEventListener("resize", windowSizeHandler)
    }
  }, [])

  return windowSize
}

export default useWindowSize
