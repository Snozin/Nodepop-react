import NavBar from "./NavBar"

const Layout = ({ children, title, ...props }) => {
  return (
    <>
      <NavBar {...props}></NavBar>
      <main>
        <h2>{title}</h2>
        {children}
      </main>
    </>
  )
}
export default Layout
