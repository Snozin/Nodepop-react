import { useEffect, useState } from "react"
import { useFilterContext } from "./filterContext"

const NameFilter = () => {
  const { filterParams, setFilterParams } = useFilterContext()
  const [value, setValue] = useState(filterParams.name)

  useEffect(() => {
    setFilterParams((prev) => ({ ...prev, name: value }))
  }, [value, setFilterParams])

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  
  return (
    <label>
      Busca por nombre:
      <br />
      <input name="name-filter" onChange={handleChange} value={value} />
    </label>
  )
}

export default NameFilter
