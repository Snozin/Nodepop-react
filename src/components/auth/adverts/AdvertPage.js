import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router"
import { getAdvert, deleteAdverts } from "../dataService"

import "./AdvertPage.css"
import placeholder from "../../../assets/placeholder.png"
import DeleteAdButton from "./DeleteAdButton"

const AdvertPage = () => {
  const { id } = useParams()
  const [advert, setAdvert] = useState([])
  const [canBeDeleted, setCanBeDeleted] = useState(false)
  const navigate = useNavigate()
  // Id prueba:
  // 5c59c9be-edac-4ab9-8471-9b50f1903c07

  useEffect(() => {
    getAdvert(id)
      .then(setAdvert)
      .catch((error) => {
        console.log(error.status)
        navigate("/notFound", { replace: true })
      })
  }, [id, navigate])

  const onDelete = () => {
    setCanBeDeleted(true)
  }

  if (canBeDeleted) {
    deleteAdverts(id)
    return <Navigate to="/" />
  }
  return (
      <main>
        <h2>{advert.name}</h2>
        {advert.photo ? (
          <img
            src={`${process.env.REACT_APP_API_BASE_URL}${advert.photo}`}
            alt={`Imagen de ${advert.name}`}
          />
        ) : (
          <img src={placeholder} alt="Anuncio sin foto" />
        )}

        <br />
        <small>{advert.sale ? "Venta" : "Compra"}</small>
        <p>Precio: {advert.price}</p>
        <div>
          {advert.tags?.map((tag, index) => (
            <span key={index}>
              <small>{tag}</small>
              <br />
            </span>
          ))}
        </div>
        <DeleteAdButton onDelete={onDelete} />
      </main>
  )
}

export default AdvertPage
