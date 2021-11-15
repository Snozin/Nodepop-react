import { useEffect, useState } from "react"
import { useFilterContext } from "./filterContext"

const TypeFilter = () => {
  const { filterParams, setFilterParams } = useFilterContext()
  const [radioValue, setRadioValue] = useState(filterParams.type)

  useEffect(() => {
    setFilterParams((prevValues) => ({ ...prevValues, type: radioValue }))
  }, [radioValue, setFilterParams])

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
