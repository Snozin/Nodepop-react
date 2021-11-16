import { Link } from "react-router-dom"

const AdvertsList = ({ adverts }) => {
  return (
    <ul>
      {adverts.map((advert) => {
        return (
          <Link key={advert.id} to={`/adverts/${advert.id}`}>
            <li className="advert-list">
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
  )
}

export default AdvertsList
