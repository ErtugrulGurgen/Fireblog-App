import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import UpdateBlog from '../pages/UpdateBlog'

const AppRouter = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/Fireblog-App/dashboard" element={<Dashboard/>} />
          <Route path="/Fireblog-App/login" element={<Login/>} />
          <Route path="/Fireblog-App/register" element={<Register/>} />
          <Route path="/Fireblog-App/profile" element={<Profile/>} />
          <Route path="/Fireblog-App/newblog" element={<NewBlog/>} />
          <Route path="/Fireblog-App/updateblog/:id" element={<UpdateBlog/>} />
          <Route path="/Fireblog-App/details/:id" element={<Details/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter