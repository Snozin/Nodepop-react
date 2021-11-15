import { useState, useEffect } from "react"
import { getTags } from "../../../dataService"
import { useFilterContext } from "./filterContext"

const TagFilter = () => {
  const [tags, setTags] = useState([])
  const { filterQuery, setFilterQuery } = useFilterContext()
  const [chosen, setChosen] = useState(filterQuery.tags)

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
