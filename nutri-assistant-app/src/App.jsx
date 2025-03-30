import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Features from './Pages/Features';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import NavBar from './components/NavBar';
import NutritionAssessment from './components/NutritionAssessment';


function App(){
  return(
    <div>
  {/* Navbar */}
  <NavBar/>
  {/* Navigation Routes */}
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/features' element={<Features/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contacts/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/nutrition-assessment' element={<NutritionAssessment/>} />

  </Routes>
    </div>
  )
}
export default App;