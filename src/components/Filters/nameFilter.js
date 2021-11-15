import { useEffect, useState } from "react"
import { useFilterContext } from "./filterContext"

const NameFilter = () => {
  const { filterQuery, setFilterQuery } = useFilterContext()
  const [value, setValue] = useState(filterQuery.name)

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  useEffect(() => {
    setFilterQuery((prev) => ({ ...prev, name: value }))
  }, [value, setFilterQuery])
  return (
    <label>
      Busca por nombre:
      <br />
      <input name="name-filter" onChange={handleChange} value={value} />
    </label>
  )
}

export default NameFilter
