import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About Us';
import Contacts from './Pages/Contacts';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import NavBar from './components/NavBar';
import NutritionAssessment from './components/NutritionAssessment';
import DietApi from './API/DietApi';
import AuthPage from './Pages/AuthPage';
import Footer from './components/Footer';



function App(){
  return(
  <div className='min-h-screen bg-cover bg-center bg-no-repeat' style={{backgroundImage: "url('/images/gold.jpg')" }}>
    <div className='bg-white bg-opacity-40 min-h-screen'>
      {/* Navbar */}
  <NavBar/>
  {/* Navigation Routes */} 
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contacts/>} />
    <Route path='/signup' element={<SignUp/>} />
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/nutrition-assessment' element={<NutritionAssessment/>} />
    <Route path='/diet-api' element={<DietApi/>} />
    <Route path='/auth-page' element={<AuthPage/>} />
    <Route path='/contacts' element={<Contacts/>} />


  </Routes>

    </div>
    <Footer />
  </div>
  )
}
export default App;