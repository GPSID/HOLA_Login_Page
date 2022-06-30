import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import User from '../User/User'
const Routing = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />}/>
         <Route path='/' element={<Registration />} />
         <Route path='/users/allUsers' element={<User />}></Route>
    </Routes>
  )
}

export default Routing
