import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import ProductDetailSkeleton from "../ProductDetailSkeleton"
import ProductDetailMobileSkeleton from "../ProductDetailMobileSkeleton"
import BreadcrumbSkeleton from "../BreadcrumbSkeleton"

const ProductDetailPageSkeleton = () => {
  const { isMobile } = useWindowSize()
  return (
    <>
      <BreadcrumbSkeleton></BreadcrumbSkeleton>
      {isMobile ? (
        <ProductDetailMobileSkeleton></ProductDetailMobileSkeleton>
      ) : (
        <ProductDetailSkeleton></ProductDetailSkeleton>
      )}
    </>
  )
}

export default ProductDetailPageSkeleton
