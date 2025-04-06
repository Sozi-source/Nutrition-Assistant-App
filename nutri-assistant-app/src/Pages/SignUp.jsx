import React from 'react'
import { useState } from 'react'
import { signUpUser } from '../Firebase/authServices'
import { useNavigate } from 'react-router-dom'

function SignUp() {

const[firstname, setFirstname] = useState("")
const[lastname, setLastname] = useState("")
const[email, setEmail] = useState("")
const[password, setPassword] = useState("")
const[confirmPassword, setConfirmPassword] = useState("")

const navigate = useNavigate();


    const handleSignUp= async(e)=>{
        e.preventDefault();
    if(password!==confirmPassword){
        alert("Password do not match");
        return;
    }

    try{
        await signUpUser(email, password, firstname, lastname);
        alert("Sign up successfully")
        navigate("/")
    } catch(error){
        alert(error.message);
    }

    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    
       
    }
    

  return (
    <div className='flex justify-center items-center'>
        <div className='p-4 rounded-lg w-full max-w-lg'>

        <h1 className='text-2xl font-bold'>Create an Account</h1>
        

            <form onSubmit={handleSignUp} className='flex flex-col gap-2'>
                
                <div className='flex flex-col md:flex-row gap-4'>
                <div className='flex flex-col w-full'>
                <label htmlFor="firstname">First Name</label>
                <input type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}
                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                <div className='flex flex-col w-full'>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}
                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-[100%]' />
                </div>

                </div>
                <div className='flex flex-col w-full'>
                <label htmlFor="email">Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                <div className='flex flex-col w-full'>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} 
                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>

                <div className='flex flex-col w-full'>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} 
                className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                </div>

                <button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md transition duration-300'>Create Account</button>
            </form>
        </div>

    </div>
  )
}

export default SignUp