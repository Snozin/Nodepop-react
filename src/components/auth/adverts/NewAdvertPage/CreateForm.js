import { useState } from "react"
import InputTitle from "./InputTitle"
import InputType from "./InputType"
import InputPrice from "./InputPrice"
import InputFile from "./InputFile"
import SelectGroup from "./SelectTags"
import { createAdvert } from "../../dataService"

const CreateForm = () => {
  const [globalState, setGlobalState] = useState({
    name: "",
    sale: true,
    price: 0,
    photo: null
  })

  console.log(globalState)

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    // console.log(data.get('name'))

    createAdvert(data)
  }

  const handleChange = () => {
    // console.log('Toy cambiando locamente')
  }

  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleChange}>
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
