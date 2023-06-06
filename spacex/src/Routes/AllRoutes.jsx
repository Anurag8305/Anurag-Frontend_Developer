import React from 'react';
import {Routes,Route} from "react-router-dom";
import HomePage from '../Pages/HomePage';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import Navbar from '../Components/Navbar';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<><Navbar /> <HomePage /></>} />
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<><Navbar /><Login /></>} />
      </Routes>
    </div>
  )
}

export default AllRoutes