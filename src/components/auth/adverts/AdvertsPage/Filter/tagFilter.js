import { useState, useEffect, useContext } from "react"
import { getTags } from "../../../dataService"
import FilterContext from "./filterContext"

const TagFilter = () => {
  const [tags, setTags] = useState([])
  const [chosen, setChosen] = useState({})
  const { setUrl } = useContext(FilterContext)

  useEffect(() => {
    getTags()
      .then(setTags)
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setUrl((prevValues) => ({ ...prevValues, tags: chosen }))
  }, [setUrl, chosen])

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.checked
    setChosen((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  return (
    <div>
      Busca por tags:{" "}
      {tags.map((tag, index) => (
        <label key={index}>
          {tag}
          <input type="checkbox" name={tag} onChange={handleChange} />
        </label>
      ))}
    </div>
  )
}

export default TagFilter
