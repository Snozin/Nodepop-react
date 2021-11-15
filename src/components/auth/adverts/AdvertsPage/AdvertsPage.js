import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAdverts } from "../../dataService"

import "./AdvertsPage.css"
import Filter from "../../../Filters/Filter"

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    getAdverts()
      .then(setAdverts)
      // .then(() => {
      //   setAdverts([])
      // })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <main>
      <h2>Listado de anuncios</h2>
      {adverts.length > 0 ? (
        <>
          <Filter />
          <ul>
            {adverts.map((advert) => {
              return (
                <Link key={advert.id} to={`/adverts/${advert.id}`}>
                  <li  className="advert-list">
                    <h3>{advert.name}</h3>
                    <small>{advert.sale ? "Venta" : "Compra"}</small>
                    <p>Precio: {advert.price}</p>
                    <div>
                      {advert.tags?.map((tag, index) => (
                        <span key={index}>
                          <small>{tag}</small>{" "}
                        </span>
                      ))}
                    </div>
                  </li>
                </Link>
              )
            })}
          </ul>
        </>
      ) : (
        <div>
          <p>Aún no hay anuncios</p>
          <Link to="/adverts/new" className="new-advert">
            Crea uno
          </Link>
        </div>
      )}
    </main>
  )
}

export default AdvertsPage
