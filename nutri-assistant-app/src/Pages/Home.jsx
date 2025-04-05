import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Home() {

const navigate = useNavigate();
const [isSignUp, setIsSignUp] = useState(false)
  
return (
  
       <div className='flex justify-between items-start mt-13'>
        
        {/* Left side */}
       <div className='w-1/2 ml-10 mb-20'>
       <div className='mt-[50px]'>
          <h1 className='text-3xl font-semibold mb-4'>Track Your Nutritional Health Journey</h1>
          <p className='text-lg text-gray-700 mb-6'>Monitor your body measurements, receive personalized nutritional assessments, and discover healthy recipes tailored to your needs.</p>
        </div>

          <div className='flex justify-center items-center'>
            <button onClick={()=>navigate("/")} 
            className='bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition'>Get Started</button>
          </div>
          
          {/* Cards */}
          <div className='flex justify-center mt-[50px] gap-4'>
            <div className='mb-4 border border-gray-400 p-1 rounded-md'>
              <h2 className='text-xl font-semibold'>Track Measurements</h2>
              <p className='text-lg text-gray-600'>Record and monitor your anthropometric data over time.</p>
            </div>
            
            <div className='mb-4 border border-gray-400 p-1 rounded-md'>
              <h2 className='text-xl font-semibold'>Dietary Plans</h2>
              <p className='text-lg text-gray-600'>Get personalized nutrition recommendations based on your health status.</p>
            </div>

            <div className='mb-4 border border-gray-400 p-1 rounded-md'>
              <h2 className='text-xl font-semibold'>Healthy Recipes</h2>
              <p className='text-lg text-gray-600'>Discover recipes that align with your nutritional needs.</p>
            </div>
          </div>
       </div>
        
        {/* Right side */}
        <div className='w-[40%] bg-white p-6 shadow-xl rounded-lg border border-gray-400'>
          <div className=''>
            <button onClick={()=>setIsSignUp(false)}
              className={`w-1/2 py-2 font-bold ${!isSignUp ? "bg-gray-400" : "text-gray-400" } `} >Sign In</button>

            <button onClick={()=>setIsSignUp(true)}
              className= {`w-1/2 py-2 font-bold ${isSignUp ? "bg-gray-400" : "text-gray-400" } `}>Sign Up</button>

            {isSignUp? <SignUp/> :<SignIn/>}
          </div>
        </div>
       </div>
  )
}

export default Home;