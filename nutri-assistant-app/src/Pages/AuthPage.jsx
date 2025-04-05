import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

function AuthPage() {

const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className='flex justify-center items-center'>
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

export default AuthPage;