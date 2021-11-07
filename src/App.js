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
import HomePage from "./components/HomePage"

const App = () => {
  return (
    // <AuthContext>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
            // TODO Redirigir al elemento 404. Crearlo
            <main>
              <h2>Oops!</h2>
              <p>No hay nada por aquí!!</p>
            </main>
          }
        />
      </Routes>
    </Router>
    // </AuthContext>
  )
}

export default App
