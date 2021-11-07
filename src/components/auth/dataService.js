import client, {
  removeAuthorizationHeader,
  setAuthorizationHeader,
} from "../../api/client"
import storage from "../../utils/storage"

// export const login = (credentials) => {
//   return client.post("/api/auth/login", credentials).then(({ accessToken }) => {
//     setAuthorizationHeader(accessToken)
//     storage.set("auth_token", accessToken)
//   })
// }

export const login = async (credentials) => {
  const { accessToken } = await client.post("/api/auth/login", credentials)
  setAuthorizationHeader(accessToken)
  storage.set("auth_token", accessToken)
  return accessToken
}

// Eliminar la cabecera de las peticiones y borrar el local storage
export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove("auth_token")
  })
