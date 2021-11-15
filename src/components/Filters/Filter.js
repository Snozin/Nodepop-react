import NameFilter from "./inputTextField"
import PriceFilter from "./inputNumberGroup"
import TagFilter from "./checkboxGroup"
import TypeFilter from "./radioGroup"

import { FilterContextProvider } from "./filterContext"
import { useEffect, useState } from "react"
import { useFilter } from "./hooks"

const Filter = ({ adverts }) => {
  const INITIAL_STATE = {
    name: "",
    range: { minVal: '', maxVal: '' },
    tags: { lifestyle: false, mobile: false, motor: false, work: false },
    type: "All",
  }
  const [filterParams, setFilterParams] = useState(INITIAL_STATE)

  useEffect(() => {
    // console.log("filterParams: ", filterParams)

    return () => {
      // Función de retorno para cancelar actualización de estado
    }
  }, [filterParams])

  const handleSubmit = (event) => {
    event.preventDeffault()
  }

  const handleChange = () => {}

  useFilter(adverts, filterParams)
  // console.log(adverts)
  return (
    // TODO:
    /* 
     * El filtro contendrá los parámetros para filtrar. Realizar el filtrado
    en el front con los datos ya existentes para evitar peticiones al back.
     */
    <FilterContextProvider value={{ filterParams, setFilterParams }}>
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
