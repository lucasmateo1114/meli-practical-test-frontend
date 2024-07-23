import React from "react"
import BreadCrumbSkeleton from "../BreadcrumbSkeleton"
import ProductListSkeleton from "../ProductListSkeleton"

const SearchResultSkeleton = () => {
  return (
    <div className="search-result-skeleton">
      <BreadCrumbSkeleton></BreadCrumbSkeleton>
      <ProductListSkeleton></ProductListSkeleton>
    </div>
  )
}

export default SearchResultSkeleton
