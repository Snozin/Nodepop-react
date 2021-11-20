import classNames from "classnames"
import { useState } from "react"

const DeleteAdButton = ({ onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false)

  const handleClick = () => {
    setShowConfirm(true)
  }
  const handleConfirmation = (event) => {
    const option = event.target.name
    if (option === "Yes") {
      onDelete()
    }
    setShowConfirm(false)
  }

  return (
    <>
      <button onClick={handleClick}>Borrar Anuncio</button>
      <div className={classNames("delete-confirm", { hidden: !showConfirm })}>
        <p>¿Seguro que quieres borrarlo?</p>
        <button name="Yes" onClick={handleConfirmation}>
          Si
        </button>
        <button name="No" onClick={handleConfirmation}>
          No
        </button>
      </div>
    </>
  )
}

export default DeleteAdButton
