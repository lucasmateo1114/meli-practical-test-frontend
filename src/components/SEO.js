import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet-async"
const SEO = ({ title, description, image, keywords, index }) => {
  const { href: url } = window.location
  const siteName = "Mercado libre"
  const provisionalDesc = description || title

  return (
    <Helmet>
      <title>{`${siteName} - ${title}`}</title>
      <meta name="description" content={provisionalDesc} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url}></link>

      <meta property="og:title" content={`${siteName} - ${title}`} />
      <meta property="og:description" content={provisionalDesc} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website"></meta>

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${siteName} - ${title}`} />
      <meta name="twitter:description" content={provisionalDesc} />
      {image && <meta name="twitter:image" content={image} />}
      <meta name="twitter:site" content="@ML_Colombia" />

      <meta
        name="robots"
        content={`${index ? "index" : "noindex"}, follow`}
      ></meta>
    </Helmet>
  )
}

SEO.defaultProps = {
  index: true,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string.isRequired,
  index: PropTypes.bool,
}

export default SEO
