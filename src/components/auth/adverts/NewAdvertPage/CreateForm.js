import { useState } from "react"
import InputTitle from "./InputTitle"
import InputType from "./InputType"
import InputPrice from "./InputPrice"
import InputFile from "./InputFile"
import SelectGroup from "./SelectTags"
import { createAdvert } from "../../dataService"

const CreateForm = ({ onSubmit }) => {
  // TODO : Cambiar el uso de formData por uso del estado
  const [globalState, setGlobalState] = useState({
    name: "",
    sale: true,
    price: 0,
    photo: null,
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    try {
      const { id } = await createAdvert(data)
      onSubmit(id)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputTitle name="name" setState={setGlobalState} />
        <br />
        <InputType setState={setGlobalState} />
        <br />
        <InputPrice name="price" setState={setGlobalState} />
        <br />
        <SelectGroup setState={setGlobalState} />
        <br />
        <InputFile setState={setGlobalState} />
        <br />
        <br />
        <button type="submit">Crear</button>
      </form>
    </>
  )
}

export default CreateForm
