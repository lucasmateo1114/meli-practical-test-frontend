import React, { Fragment } from "react"
import PropTypes from "prop-types"
import "./index.css"

const Breadcrumb = ({ categories }) => {
  return (
    <div className="breadcrumb__container">
      {categories?.map((category, index) => {
        const isLastLevel = index === categories.length - 1
        return (
          <Fragment key={category}>
            <span
              className={isLastLevel ? "breadcrumb__category--last-level" : ""}
            >
              {category} {!isLastLevel ? "> " : ""}
            </span>
          </Fragment>
        )
      })}
    </div>
  )
}

Breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Breadcrumb
