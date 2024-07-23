import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrum"
import ProductList from "../../components/ProductList"
import { searchItems } from "../../common/clients/items"
import NotResultsFound from "../../components/NotResultsFound"
import UnexpectedError from "../../components/UnexpectedError"
import DefaultLoading from "../../components/Loading"
import texts from "../../common/texts.json"
import "./index.css"

const SearchResult = () => {
  const [result, setResult] = useState()
  const [error, setError] = useState()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get("search")
  const shouldShowNotFound =
    error === texts.STATUS_CODE.NOT_FOUND || result?.items.length === 0
  useEffect(() => {
    const search = async () => {
      setError()
      setResult()
      const response = await searchItems(searchTerm)
      if (response.error) {
        setError(response.statusCode)
      } else {
        setResult(response)
      }
    }
    search()
  }, [searchTerm])

  if (shouldShowNotFound) {
    return <NotResultsFound></NotResultsFound>
  }

  if (error) {
    return <UnexpectedError></UnexpectedError>
  }

  return (
    <>
      {!result ? (
        <DefaultLoading></DefaultLoading>
      ) : (
        <div className="search-result__container">
          <Breadcrumb categories={result?.categories}></Breadcrumb>
          <ProductList products={result?.items}></ProductList>
        </div>
      )}
    </>
  )
}

export default SearchResult