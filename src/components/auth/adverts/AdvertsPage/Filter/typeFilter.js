import { useContext, useEffect, useState } from "react"
import FilterContext from "./filterContext"

const TypeFilter = () => {
  const [radioValue, setRadioValue] = useState(false)
  const { setUrl } = useContext(FilterContext)

  useEffect(() => {
    setUrl((prevValues) => ({ ...prevValues, sale: radioValue }))
  }, [radioValue, setUrl])

  const handleChange = (event) => {
    // console.log(event.target.checked)
    console.log(event.target.value)
    if (event.target.value === "true") {
      // console.log('entro')
      setRadioValue({
        sale: true,
      })
    }
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
          value={true}
        />
      </label>{" "}
      <label>
        Compra
        <input
          type="radio"
          name="type-filter"
          onChange={handleChange}
          value={false}
        />
      </label>{" "}
      <label>
        Todo
        <input
          type="radio"
          name="type-filter"
          onChange={handleChange}
          value={undefined}
        />
      </label>
    </div>
  )
}

export default TypeFilter
