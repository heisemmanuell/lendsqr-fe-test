import { Route, Routes } from "react-router-dom"
import Header from "../components/dashboard/Header"
import Sidebar from "../components/dashboard/Sidebar"
import Users from "../components/dashboard/Users"
import layoutStyles from "../scss/dashboard.module.scss"


const DashboardLayout = () => {
 
  return (
     <div className={layoutStyles.dashboard}>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Users />} />
        {/* <Route path='users/:id' element={<UserDetails />} /> */}
      </Routes>
    </div>
  )
}

export default DashboardLayout