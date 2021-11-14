import NameFilter from "./nameFilter"
import PriceFilter from "./priceFilter"
import TagFilter from "./tagFilter"
import TypeFilter from "./typeFilter"

import { FilterContextProvider } from "./filterContext"
import { useEffect, useState } from "react"

const Filter = () => {
  const INITIAL_STATE = {type:'All'}
  const [filterQuery, setFilterQuery] = useState(INITIAL_STATE)

  const handleSubmit = (event) => {
    event.preventDeffault()
  }

  useEffect(() => {
    console.log("filtrare: ", filterQuery)

    return () => {
      // Función de retorno para cancelar actualización de estado
    }
  }, [filterQuery])

  const handleChange = () => {
    // console.log('cambio')
  }
  return (
    // TODO:
    /* 
     * El filtro contendrá los parámetros para filtrar. Realizar el filtrado
    en el front con los datos ya existentes para evitar peticiones al back.
     */
    <FilterContextProvider value={{ filterQuery, setFilterQuery }}>
      <div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          <NameFilter />
          <TypeFilter />
          <PriceFilter />
          <TagFilter />
        </form>
      </div>
    </FilterContextProvider>
  )
}

export default Filter
