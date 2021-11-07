import NameFilter from "./nameFilter"
import PriceFilter from "./priceFilter"
import TagFilter from "./tagFilter"
import TypeFilter from "./typeFilter"

import { FilterContextProvider } from "./filterContext"
import { useEffect, useState } from "react"

const Filter = () => {
  const [url, setUrl] = useState([])
  const handleSubmit = (event) => {
    event.preventDeffault()
  }

  useEffect(() => {
    console.log("filtrare: ", url)
  }, [url])
  return (
    <FilterContextProvider value={{ url, setUrl }}>
      <div>
        <form onSubmit={handleSubmit}>
          <NameFilter />
          <br />
          <br />
          <TypeFilter />
          <br />
          <PriceFilter />
          <br />
          <br />
          <TagFilter />
          <br />
        </form>
      </div>
    </FilterContextProvider>
  )
}

export default Filter
