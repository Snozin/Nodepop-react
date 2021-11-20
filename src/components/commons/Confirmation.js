// import { useState } from "react/cjs/react.development"
import Button from "./Button"

const Confirmation = ({className, msg, btnClick }) => {
  // const [btnState, setBtnState] = useState(false)
  // const handleBtnClick = ({ target }) => {
  //   // target.name === 'confirm.yes'
  // }
  return (
    <div className={className}>
      <p>{msg}</p>
      <Button name="confirm-yes" onClick={btnClick}>
        Si
      </Button>
      <Button name="confirm-no" onClick={btnClick}>
        No
      </Button>
    </div>
  )
}

export default Confirmation
