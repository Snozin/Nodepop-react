import { useContext, useState } from "react"
import { login } from "./auth/dataService"
import AuthContext from "./auth/context"
import { useNavigate, useLocation } from "react-router"
import storage from "../utils/storage"

const LoginPage = () => {
  const credentials = () => {
    if (storage.get("credentials")) {
      const { email, password } = storage.get("credentials")
      return { email: email, password: password }
    }
    return { email: "", password: "" }
  }
  const [inputValues, setInputValues] = useState(credentials)
  const [checked, setChecked] = useState(false)
  const { handleLoginState } = useContext(AuthContext)

  const handleInputChange = (event) => {
    setInputValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked)
  }
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await login(inputValues)
      handleLoginState(true)
      if (checked) {
        storage.set("credentials", {
          email: inputValues.email,
          password: inputValues.password,
        })
      }
      navigate(from, { replace: true })
    } catch (error) {
      //TODO Render de componente de error con el mensaje
      console.log(error)
    }
  }

  return (
    <>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          placeholder="introduce tu email"
          type="email"
          name="email"
          value={inputValues.email}
          onChange={handleInputChange}
        />
        <input
          placeholder="aquí tu clave"
          type="password"
          name="password"
          value={inputValues.password}
          onChange={handleInputChange}
        />
        <br />
        <small>¿Guardar contraseña?</small>
        <input
          type="checkbox"
          name="saveCredentials"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <br />
        {/* TODO Implementar boton de borrar formulario */}
        {/* <button type="reset">Borrar</button> */}
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default LoginPage
