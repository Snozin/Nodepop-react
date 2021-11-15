import { useState, useEffect } from "react"
import { getTags } from "../auth/dataService"
import { useFilterContext } from "./filterContext"

const TagFilter = () => {
  const [tags, setTags] = useState([])
  const { filterParams, setFilterParams } = useFilterContext()
  const [chosen, setChosen] = useState(filterParams.tags)

  useEffect(() => {
    getTags()
      .then(setTags)
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    setFilterParams((prevValues) => ({ ...prevValues, tags: chosen }))
  }, [setFilterParams, chosen])

  const handleChange = (event) => {
    const { value, checked } = event.target
    setChosen((prev) => ({ ...prev, [value]: checked }))
  }

  return (
    <div>
      Busca por tags:{" "}
      {tags.map((tag, index) => (
        <label key={index}>
          {tag}
          <input
            type="checkbox"
            value={tag}
            onChange={handleChange}
            checked={chosen[tag]}
          />
        </label>
      ))}
    </div>
  )
}

export default TagFilter
