import { useState } from "react"

const NameFilter = () => {
  const [value, setValue] = useState("")

  const handleChange = (event) => {
    console.log("filtro nombre", event.target.value)

    setValue(event.target.value)
  }
  return (
    <label>
      Busca por nombre: 
      <br />
      <input
        name="name-filter"
        onChange={handleChange}
        value={value}
      />
    </label>
  )
}

export default NameFilter
