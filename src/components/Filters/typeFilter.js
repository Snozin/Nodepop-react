import { useEffect, useState } from "react"
import { useFilterContext } from "./filterContext"

const TypeFilter = () => {
  const { filterQuery, setFilterQuery } = useFilterContext()
  const [radioValue, setRadioValue] = useState(filterQuery.type)

  useEffect(() => {
    setFilterQuery((prevValues) => ({ ...prevValues, type: radioValue }))
  }, [radioValue, setFilterQuery])

  const handleChange = (event) => {
    const value = event.target.value

    setRadioValue(value)
  }

  return (
    <div>
      <span>Busca por tipo:</span>
      <br />
      <label>
        Venta
        <input
          type="radio"
          name="type-filter"
          onChange={handleChange}
          value='Sell'
          checked={radioValue === 'Sell'}
        />
      </label>{" "}
      <label>
        Compra
        <input
          type="radio"
          name="type-filter"
          onChange={handleChange}
          value='Buy'
          checked={radioValue === 'Buy'}
        />
      </label>{" "}
      <label>
        Todo
        <input
          type="radio"
          name="type-filter"
          onChange={handleChange}
          value='All'
          checked={radioValue === 'All'}
        />
      </label>
    </div>
  )
}

export default TypeFilter
