import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../Firebase/authServices';

function SignIn() {
    const[email, setEmail] =useState("");
    const[password, setPassword] =useState("");

    const navigate = useNavigate();
   

    const handleSignIn=async(e)=>{
        e.preventDefault();

        try{
            await signInUser(email, password);
            alert("Sign-In Successfully");
            navigate("/nutrition-assessment")
        } catch(error){
            if(error.code ==="auth/wrong password"){
                alert("Incorrect password. Please try again")
            }
            if(error.code === "auth/user-not-found"){
                alert("No account found with this email. Please sign up")

            } else{
            alert(error.message)
        } 
        } 
    }

    

  return (
    
        <div className='flex justify-center items-center'>
            <div className='p-4 rounded-lg w-full max-w-lg'>
            <h1 className='text-2xl font-bold'>Sign In</h1>
            <p className='text-gray-600'>Enter your email and password to access your account</p>
            
            <form onSubmit={handleSignIn} className='flex flex-col gap-2'>

               <div className='flex flex-col'>
               <label htmlFor="email" className='font-semibold'>Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='name@example.com'
                className='border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
               </div>

                <div className='flex flex-col'>
                <label htmlFor="password" className='font-semibold'>Password</label>
                <input type="password" autoComplete='current-password' value={password} onChange={(e)=>setPassword(e.target.value)} 
                className='border border-gray-300 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ' />

                </div>
                <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md transition duration-300' >Sign In</button>

            </form>
            </div>
        </div>
    
  )
}

export default SignIn