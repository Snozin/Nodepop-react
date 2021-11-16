import { Link } from "react-router-dom"

const AdvertsList = ({ adverts }) => {
  return (
    <ul>
      {adverts.length > 0 ? (
        <>
          {adverts.map((advert) => (
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
          ))}
        </>
      ) : (
        <div>
          <h4>Oops!! no hay anuncios que cocidan</h4>
          <Link to="/adverts/new" className="new-advert">
            Crea uno
          </Link>
        </div>
      )}
    </ul>
  )
}

export default AdvertsList
