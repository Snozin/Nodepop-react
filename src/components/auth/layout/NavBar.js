import { Link } from "react-router-dom"
import Logout from "./Logout"
// import { Button } from "../../commons"

import "./NavBar.css"

const NavBar = ({ link }) => {
  return (
    <nav>
      <ul>
        <li>
          {link === "new" ? (
            <Link to="/adverts/new">Crear Anuncio</Link>
          ) : (
            <Link to="/adverts/">Lista Anuncios</Link>
          )}
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
