import {  useState } from "react"

const InputFile = ({ setState }) => {
  const [value, setValue] = useState(null)

  const handleChange = ({ target }) => {
    setValue(target.files[0])
    // console.log(target.files[0])
  }

  return (
    <>
      <label>
        Foto <input name="photo" type="file" onChange={handleChange} />
      </label>
    </>
  )
}

export default InputFile
