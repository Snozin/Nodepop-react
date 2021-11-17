import { useEffect, useState } from "react"

const SelectGroup = ({ setState }) => {
  const [value, setValue] = useState([])

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      tags: value,
    }))
  }, [setState, value])

  const handleChange = ({ target }) => {
    const tags = [...target.children]
    const filteredTags = tags
      .filter((option) => option.selected)
      .map((option) => option.value)
    console.log("cambio: ", filteredTags)

    setValue(filteredTags)
  }

  return (
    <label>
      Tags{" "}
      <select name='tags' value={value} multiple={true} onChange={handleChange} required>
        <option value="Lifestyle">Lifestyle</option>
        <option value="Mobile">Mobile</option>
        <option value="Motor">Motor</option>
        <option value="Work">Work</option>
      </select>
    </label>
  )
}

export default SelectGroup
