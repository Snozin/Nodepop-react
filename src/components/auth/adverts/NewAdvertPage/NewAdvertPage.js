import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import CreateForm from "./CreateForm"
// import SelectGroup from "./selectGroup"

const NewAdvertPage = () => {
  const [newId, setNewId] = useState(false)
  const navigate =  useNavigate()

  useEffect(() => {
    if (newId) {
      console.log("Nueva id: ", newId)
      navigate(`/adverts/${newId}`)
    }
  }, [newId, navigate])

  return (
    <main>
      <h2>Crear nuevo Anuncio</h2>
      <CreateForm setNewId={setNewId} />
    </main>
  )
}

export default NewAdvertPage
