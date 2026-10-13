import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/pages/Home.jsx'
import MainLayout from './components/common/MainLayout.jsx'
import Login from './components/pages/Login.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import Register from './components/pages/Register.jsx'
import Post from './components/pages/Post.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>        
          <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>          
          <Route path='/register' element={<Register/>}/>
          <Route path='/Post' element={<Post/>}/>               
          </Route>
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
