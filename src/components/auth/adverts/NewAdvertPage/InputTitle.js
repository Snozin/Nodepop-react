import { useInput } from "./hooks"

const InputTitle = ({ setState, name }) => {
  const [value, handleChange] = useInput(setState, name)

  return (
    <label>
      Título del anuncio{"  "}
      <input
        autoFocus
        required
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}

export default InputTitle
