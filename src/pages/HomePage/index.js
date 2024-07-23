import React from "react"
import SEO from "../../components/SEO"
import texts from "../../common/texts.json"
const {
  SEO: {
    HOME_PAGE: { KEYWORDS, DESCRIPTION },
  },
} = texts

const HomePage = () => {
  return (
    <SEO title="Inicio" keywords={KEYWORDS} description={DESCRIPTION}></SEO>
  )
}

export default HomePage
