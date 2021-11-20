import classNames from "classnames"
import { useState } from "react"
import { Button, Confirmation } from "../../commons/"

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
      <Button onClick={handleClick}>Borrar Anuncio</Button>
      <Confirmation
        className={classNames("delete-confirm", { hidden: !showConfirm })}
        msg={"¿Seguro que quieres borrarlo?"}
        btnClick={handleConfirmation}
      />
    </>
  )
}

export default DeleteAdButton
