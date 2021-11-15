import { useEffect, useState } from "react"
import { useFilterContext } from "./filterContext"

const PriceFilter = () => {
  const { filterParams, setFilterParams } = useFilterContext()
  const [values, setValues] = useState(filterParams.range)

  useEffect(() => {
    setFilterParams((prev) => ({
      ...prev,
      range: values,
    }))
  }, [values, setFilterParams])

  const handleChange = (event) => {
    const { value, name } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

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
