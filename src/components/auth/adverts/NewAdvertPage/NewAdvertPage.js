import { useNavigate } from "react-router"
import CreateForm from "./CreateForm"

const NewAdvertPage = () => {
  const navigate = useNavigate()
  const onSubmit = (id) => {
    navigate(`/adverts/${id}`)
  }

  return (
    <main>
      <h2>Crear nuevo Anuncio</h2>
      <CreateForm onSubmit={onSubmit} />
    </main>
  )
}

export default NewAdvertPage
