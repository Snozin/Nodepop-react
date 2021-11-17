import { useEffect, useState } from "react"

const InputType = ({ setState }) => {
  const [value, setValue] = useState(true)

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      sale: value,
    }))
  }, [setState, value])

  const handleChange = ({ target }) => {
    setValue(target.value === "true")
  }

  return (
    <>
      <label>Tipo de anuncio: </label>
      <label>
        Venta
        <input
          type="radio"
          name="sale"
          checked={value === true}
          required
          value={true}
          onChange={handleChange}
        />
      </label>
      <label>
        Compra
        <input
          type="radio"
          name="sale"
          value={false}
          checked={value === false}
          onChange={handleChange}
        />
      </label>
    </>
  )
}

export default InputType
