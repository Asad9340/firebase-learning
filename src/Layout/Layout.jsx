import { Outlet } from "react-router-dom"
import Navbar from "../Home/Navbar/Navbar"

function Layout() {
  return (
    <div className="mx-3">
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default Layout