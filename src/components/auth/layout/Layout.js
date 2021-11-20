import NavBar from "./NavBar"

const Layout = ({ children, title, ...props }) => {
  return (
    <div>
      <NavBar {...props}></NavBar>
      <h2>{title}</h2>
      <main>{children}</main>

      <p>Cosas</p>
    </div>
  )
}
// TODO Implementar el menú superior
export default Layout
