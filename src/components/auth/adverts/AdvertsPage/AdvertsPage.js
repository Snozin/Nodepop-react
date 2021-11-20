import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAdverts } from "../../dataService"

import "./AdvertsPage.css"
import FilterForm from "../../../Filters/FilterForm"
import AdvertList from "./AdvertLsit"

import Layout from "../../layout/Layout"

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([])
  const [filterAds, setFilterAds] = useState([])

  // TODO Actualizar estado tras borrar para refrescar la lista
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
    <Layout link={'new'} title={'Listado de Anuncios'}>
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
    </Layout>
  )
}

export default AdvertsPage
