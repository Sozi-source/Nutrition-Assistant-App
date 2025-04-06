import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthPage() {

const [isSignUp, setIsSignUp] = useState(false)
const navigate = useNavigate();

  return (
    <div className='relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 py-8  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('/images/bg2.jpg')" }}>
       
       {/* Back Button */}
        <button onClick={()=>navigate("/")} className='absolute top-6 left-6 bg-white px-4 py-2 rounded-md shadow-md text-gray-700 hover:bg-gray-200 transition'>Back</button>
        {/* Signin / Signup */}
        <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-md bg-white p-6 shadow-xl rounded-lg border border-gray-300'>
          <div className=''>
            <button onClick={()=>setIsSignUp(false)}
              className={`w-1/2 py-1 font-bold ${!isSignUp ? "bg-gray-400" : "text-gray-400" } `} >Sign In</button>

            <button onClick={()=>setIsSignUp(true)}
              className= {`w-1/2 py-1 font-bold ${isSignUp ? "bg-gray-400" : "text-gray-400" } `}>Sign Up</button>

            {isSignUp? <SignUp/> :<SignIn/>}
          </div>
        </div>

       
       
            
        
    </div>
  )
}

export default AuthPage;