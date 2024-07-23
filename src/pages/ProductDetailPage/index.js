import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getItemById } from "../../common/clients/items"
import Breadcrumb from "../../components/Breadcrum"
import ProductDetail from "../../components/ProductDetail"
import ProductDetailMobile from "../../components/ProductDetailMobile"
import ProductNotFound from "../../components/ProductNotFound"
import UnexpectedError from "../../components/UnexpectedError"
import DefaultLoading from "../../components/Loading"
import useWindowSize from "../../hooks/useWindowSize"
import SEO from "../../components/SEO"
import buildSeoKeywords from "../../common/buildSeoKeywords"
import texts from "../../common/texts.json"
import "./index.css"

const ProductDetailPage = () => {
  const { isMobile } = useWindowSize()
  const [item, setItem] = useState()
  const [error, setError] = useState()
  const { id } = useParams()
  const shouldShowNotFound = error === texts.STATUS_CODE.NOT_FOUND

  useEffect(() => {
    const getItem = async () => {
      const response = await getItemById(id)
      console.log(response)
      if (response.error) {
        setError(response.statusCode)
      } else {
        setItem(response.item)
      }
    }
    getItem()
  }, [id])

  if (shouldShowNotFound) {
    return <ProductNotFound></ProductNotFound>
  }

  if (error) {
    return <UnexpectedError></UnexpectedError>
  }

  return (
    <>
      {!item ? (
        <DefaultLoading></DefaultLoading>
      ) : (
        <>
          <SEO
            title={item.title}
            image={item.picture}
            description={item.description}
            keywords={buildSeoKeywords(item.categories)}
          />
          <Breadcrumb categories={item?.categories}></Breadcrumb>
          {isMobile ? (
            <ProductDetailMobile product={item}></ProductDetailMobile>
          ) : (
            <ProductDetail product={item}></ProductDetail>
          )}
        </>
      )}
    </>
  )
}

export default ProductDetailPage
