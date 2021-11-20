// import { useState } from "react"
import Button from "./Button"

const Confirmation = ({className, msg, onConfirm, showConfirm }) => {
  const handleBtnClick = ({ target }) => {
    if (target.name === 'confirm-yes') {
      onConfirm()
    }
    showConfirm(false)
  }
  return (
    <div className={className}>
      <p>{msg}</p>
      <Button name="confirm-yes" onClick={handleBtnClick}>
        Si
      </Button>
      <Button name="confirm-no" onClick={handleBtnClick}>
        No
      </Button>
    </div>
  )
}

export default Confirmation
