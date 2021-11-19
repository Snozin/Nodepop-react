import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import {
  AdvertPage,
  AdvertsPage,
  AuthContext,
  NewAdvertPage,
  RequireAuth,
} from "./components/auth"
import LoginPage from "./components"
import { useState } from "react"

const App = ({ isPrevLogged }) => {
  const [isLogged, setIsLogged] = useState(isPrevLogged)
  console.log("ta loguiado?: ", isLogged)
  const handleLoginState = (value) => setIsLogged(value)
  return (
    <AuthContext value={{ isLogged, handleLoginState }}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/adverts" />} />
          <Route
            path="/adverts"
            element={
              <RequireAuth>
                <AdvertsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/adverts/:id"
            element={
              <RequireAuth>
                <AdvertPage />
              </RequireAuth>
            }
          />
          <Route
            path="/adverts/new"
            element={
              <RequireAuth>
                <NewAdvertPage />
              </RequireAuth>
            }
          />
          <Route
            path="*"
            element={
              <main>
                <h2>Oops!</h2>
                <p>No hay nada por aquí!!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </AuthContext>
  )
}

export default App
