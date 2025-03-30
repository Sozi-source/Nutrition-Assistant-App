import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';

function Home() {

const navigate = useNavigate();
const [isSignUp, setIsSignUp] = useState(false)
  
return (
  
       <div className='w-1/2 flex justify-center items-center mb-20 ml-180 mt-13'>
        <div className='bg-white p-6 shadow-xl rounded-lg w-[70%] border border-gray-400'>
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