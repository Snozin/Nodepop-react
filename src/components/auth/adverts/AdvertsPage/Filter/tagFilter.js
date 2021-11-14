import { useState, useEffect, useContext } from "react"
import { getTags } from "../../../dataService"
import FilterContext from "./filterContext"

const TagFilter = () => {
  const [tags, setTags] = useState([])
  const [chosen, setChosen] = useState({})
  const { setFilterQuery } = useContext(FilterContext)

  useEffect(() => {
    getTags()
      .then(setTags)
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setFilterQuery((prevValues) => ({ ...prevValues, tags: chosen }))
  }, [setFilterQuery, chosen])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.checked
    setChosen((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }
  // TODO:
  /**
   * Recibir las props del estado inicial de lo checkboxes y
   * usar el checked para controlar el valor.
   */
  return (
    <div>
      Busca por tags:{" "}
      {tags.map((tag, index) => (
        <label key={index}>
          {tag}
          <input type="checkbox" value={tag} onChange={handleChange} />
        </label>
      ))}
    </div>
  )
}

export default TagFilter
