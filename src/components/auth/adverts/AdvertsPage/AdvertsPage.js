import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAdverts } from "../../dataService"

import "./AdvertsPage.css"
import FilterForm from "../../../Filters/FilterForm"
import AdvertList from "./AdvertLsit"

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([])
  const [filterAds, setFilterAds] = useState([])

  useEffect(() => {
    getAdverts()
      .then(setAdverts)
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const onFilter = (ads) => {
    setFilterAds(ads)
  }

  return (
    <main>
      <h2>Listado de anuncios</h2>
      {adverts.length > 0 ? (
        <>
          <FilterForm adverts={adverts} onFilter={onFilter} />
          <AdvertList adverts={filterAds} />
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
