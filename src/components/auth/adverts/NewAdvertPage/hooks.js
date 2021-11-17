import { useEffect, useState } from "react"

export const useInput = (setGlobalState, name) => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = ({ target }) => {
    const { value } = target
    setInputValue(value)
  }

  useEffect(() => {
    setGlobalState((prev) => ({
      ...prev,
      [name]: inputValue,
    }))
  }, [name, inputValue, setGlobalState])

  return [inputValue, handleChange]
}

export const useElement = (inputProps) => {

  // const input = <input name='paco'/>
  // console.log(input)

  switch (inputProps.type) {
    case "text": {
      // const input = <input type={inputProps.type} name={inputProps.name}/>
      // console.log(input)
      break
    }
    default: {
      console.log("Choy el defesto")
      break
    }
  }
  // return [<></>]
  // console.log(inputProps)
}
