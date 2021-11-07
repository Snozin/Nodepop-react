const PriceFilter = () => {
  const handleChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <label>
      Busca por rango:{" "}
      <input
        type="range"
        onChange={handleChange}
        min="0"
        max="100000"
        step='100' 
      ></input>
    </label>
  )
}

export default PriceFilter
