import { Button, Confirmation } from "../../commons"
import { useState } from "react"
import classNames from "classnames"
import { logout } from "../dataService"
import { useNavigate } from "react-router"

import { useContext } from "react"
import AuthContext from "../context"

const Logout = () => {
  const [showConfirm, setShowConfirm] = useState(false)
  const navigate = useNavigate()
  const {handleLoginState} = useContext(AuthContext)

  const handleClick = () => {
    setShowConfirm(true)
  }

  const onLogout = ()=>{
    console.log('hago logout')
    logout()
    handleLoginState(false)
    navigate("/", { replace: true })
  }

  return (
    <>
      <Button onClick={handleClick}>Logout</Button>
      <Confirmation
        className={classNames("logout-confirm", { hidden: !showConfirm })}
        msg={'¿Quieres cerrar sesión?'}
        showConfirm={setShowConfirm}
        onConfirm={onLogout}
      />
    </>
  )
}

export default Logout
