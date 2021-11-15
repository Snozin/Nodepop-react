import { useEffect, useState } from "react"
import { useFilterContext } from "./filterContext"

const PriceFilter = () => {
  const { filterQuery, setFilterQuery } = useFilterContext()
  const [values, setValues] = useState(filterQuery.range)

  const handleChange = (event) => {
    const { value, name } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }
  useEffect(() => {
    setFilterQuery((prev) => ({
      ...prev,
      range: values,
    }))
  }, [values, setFilterQuery])
  return (
    <label>
      Busca por rango:{" "}
      <input
        name="minVal"
        type="number"
        value={values.minVal}
        onChange={handleChange}
        min={0}
      />
      <input
        name="maxVal"
        type="number"
        value={values.maxVal}
        onChange={handleChange}
        max={1000000}
      />
    </label>
  )
}

export default PriceFilter
