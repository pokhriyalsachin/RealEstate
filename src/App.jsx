import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , BrowserRouter, Routes } from 'react-router-dom'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'
import Home from './pages/Home'
function App() {


  return (
    <BrowserRouter>
    <Header/>
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/about" element={<About/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
