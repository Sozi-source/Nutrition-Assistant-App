import { signOutUser } from "../Firebase/authServices";
import React from 'react'
import { useNavigate } from "react-router-dom";

const LogoutButton =()=>{
    const navigate = useNavigate();
    const handleLogout =async()=>{

    try{
        await signOutUser();
        console.log("User signed out successfully")
        navigate("/")
        
    } catch (error){
        console.error("Sign out error:", error.message)        
    }}

    return (
        <button onClick={handleLogout} className="bg-gray-100 font-serif text-blue-600 font-bold p-1.5 mt-3 rounded-lg
         shadow-lg hover:bg-gray-300 transition duration-300 ease-in-out border border-blue-500">Logout</button>
    )
}
export default LogoutButton;