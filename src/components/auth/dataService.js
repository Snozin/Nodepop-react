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
  // storage.set("auth_token", accessToken)
  return accessToken
}

// Eliminar la cabecera de las peticiones y borrar el local storage
export const logout = () =>
  Promise.resolve().then(() => {
    removeAuthorizationHeader()
    storage.remove("auth_token")
  })

export const getAdvert = async (id) => {
  return await client.get(`/api/v1/adverts/${id}`)
}

export const getAdverts = async () => {
  const url = `/api/v1/adverts`
  return await client.get(url)
}

export const createAdvert = async (data) => {
  const url = `/api/v1/adverts`
  const config = { headers: { "content-type": "multipart/form-data" } }
  return await client.post(url, data, config)
}

export const getTags = async () => {
  return await client.get("/api/v1/adverts/tags")
}

export const deleteAdverts = async (id) => {
  return await client.delete(`/api/v1/adverts/${id}`)
}
