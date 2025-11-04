import './App.css'
import React, { useEffect, useState } from 'react';
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from "react-router-dom"
import { Dashboard } from './pages/Dashboard';
import { Sidebar } from './Components/Sidebar';
import { Member } from './pages/Member';
import { Generaluser } from './pages/Generaluser';
import { MemberDetail } from './pages/MemberDetail';

function App() {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    let isLoggedin = sessionStorage.getItem("isLogin")
    if (isLoggedin) {
      setisLogin(true);
      // navigate('/dashboard')
    }
    else{
      setisLogin(false);
      navigate('/')
    }
  }, [sessionStorage.getItem("isLogin")])

  return (
    <div className="flex">
      {isLogin && <Sidebar />}
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/member' element={<Member/>}/>
          <Route path='/specific/:page' element={<Generaluser/>}/>
          <Route path='/member/:id' element={<MemberDetail/>}/>
        </Routes>
      
    </div>
  )
}

export default App
