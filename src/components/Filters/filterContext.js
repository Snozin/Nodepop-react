import React from "react"
import { useContext } from "react"

const FilterContext = React.createContext()

export const FilterContextProvider = FilterContext.Provider

export const useFilterContext = () => useContext(FilterContext)

export default FilterContext
