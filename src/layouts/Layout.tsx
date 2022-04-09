import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"

type Props = {}
const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default Layout
