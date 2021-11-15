import { useEffect, useState } from "react"
import { useFilterContext } from "./filterContext"

const NameFilter = () => {
  const { filterParams, setFilterParams } = useFilterContext()
  const [value, setValue] = useState(filterParams.name)

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  useEffect(() => {
    setFilterParams((prev) => ({ ...prev, name: value }))
  }, [value, setFilterParams])
  return (
    <label>
      Busca por nombre:
      <br />
      <input name="name-filter" onChange={handleChange} value={value} />
    </label>
  )
}

export default NameFilter
