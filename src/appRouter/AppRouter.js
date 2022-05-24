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
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="newblog" element={<NewBlog/>} />
          <Route path="updateblog/:id" element={<UpdateBlog/>} />
          <Route path="details/:id" element={<Details/>} />
        </Routes>
    </Router>
  )
}

export default AppRouter