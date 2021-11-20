import { useNavigate } from "react-router"
import Layout from "../../layout/Layout"
import CreateForm from "./CreateForm"

const NewAdvertPage = () => {
  const navigate = useNavigate()
  const onSubmit = (id) => {
    navigate(`/adverts/${id}`)
  }

  return (
    <Layout title={'Crear Nuevo Anuncio'}>
      <CreateForm onSubmit={onSubmit} />
    </Layout>
  )
}

export default NewAdvertPage
