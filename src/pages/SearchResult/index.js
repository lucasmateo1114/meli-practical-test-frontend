import React, { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb"
import ProductList from "../../components/ProductList"
import { searchItems } from "../../common/clients/items"
import NotResultsFound from "../../components/NotResultsFound"
import UnexpectedError from "../../components/UnexpectedError"
import SearchResultSkeleton from "../../skeletons/SearchResultSkeleton"
import SEO from "../../components/SEO"
import buildSeoKeywords from "../../common/buildSeoKeywords"
import { capitalize } from "../../common/utils"
import texts from "../../common/texts.json"
import "./index.css"

const SearchResult = () => {
  const [result, setResult] = useState()
  const [error, setError] = useState()
  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get("search")
  const shouldShowNotFound =
    error === texts.STATUS_CODE.NOT_FOUND || result?.items.length === 0
  const seoTitle = searchTerm ? capitalize(searchTerm) : "Página de busqueda"
  const seoDescription = searchTerm
    ? texts.SEO.SEARCH_RESULT.DESCRIPTION.replace("{searchTerm}", seoTitle)
    : undefined

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
        <SearchResultSkeleton></SearchResultSkeleton>
      ) : (
        <div className="search-result__container">
          <SEO
            title={seoTitle}
            description={seoDescription}
            keywords={buildSeoKeywords(result.categories)}
          />
          <Breadcrumb categories={result.categories}></Breadcrumb>
          <ProductList products={result.items}></ProductList>
        </div>
      )}
    </>
  )
}

export default SearchResult
