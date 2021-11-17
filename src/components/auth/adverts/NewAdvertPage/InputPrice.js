// import { useState, useEffect }
import { useInput } from "./hooks"

const InputPrice = ({ setState, name }) => {
  const [value, handleChange] = useInput(setState, name)

  return (
    <>
      <label>
        Precio{" "}
        <input
          required
          type="number"
          name={name}
          onChange={handleChange}
          value={value}
          min="0"
        />
      </label>
    </>
  )
}

export default InputPrice
