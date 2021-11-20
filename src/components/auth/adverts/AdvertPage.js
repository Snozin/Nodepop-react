import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getAdvert, deleteAdverts } from "../dataService"

import "./AdvertPage.css"
import placeholder from "../../../assets/placeholder.png"
import DeleteAdButton from "./DeleteAdButton"
import Layout from "../layout/Layout"

const AdvertPage = () => {
  const { id } = useParams()
  const [advert, setAdvert] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getAdvert(id)
      .then(setAdvert)
      .catch((error) => {
        console.log(error.status)
        navigate("/notFound", { replace: true })
      })
  }, [id, navigate])

  const onDelete = () => {
    deleteAdverts(id)
    navigate("/adverts", { replace: true })
  }

  return (
    <Layout title={advert.name}>
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
    </Layout>
  )
}

export default AdvertPage
