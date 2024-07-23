import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CommonLayout from "../layouts/CommonLayout"
import NotFoundPage from "../pages/NotFoundPage"
import DefaultLoading from "../components/Loading"

const LazySearchResult = React.lazy(() => import("../pages/SearchResult"))
const LazyProductDetailPage = React.lazy(
  () => import("../pages/ProductDetailPage"),
)

const RouterSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout></CommonLayout>}>
          <Route
            path="items"
            element={
              <Suspense fallback={<DefaultLoading></DefaultLoading>}>
                <LazySearchResult></LazySearchResult>
              </Suspense>
            }
          ></Route>
          <Route
            path="items/:id"
            element={
              <Suspense fallback={<DefaultLoading></DefaultLoading>}>
                <LazyProductDetailPage></LazyProductDetailPage>
              </Suspense>
            }
          ></Route>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouterSwitch
