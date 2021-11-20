const Button = ({children, name, onClick}) => {
  return (
    <button onClick={onClick} name={name}>
      {children}
    </button>
  )
}

export default Button