import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from '../Pages/LogoutButton';


function NavBar() {
  const[user, setUser] =useState(null);
  const[loading, setLoading] = useState(true)
  const[dropdownOpen, setDropdownOpen] = useState(false)
  const auth = getAuth();


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false);
    });
      return () =>unsubscribe();
  }, []);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <nav className='fixed top-[-30px] w-full bg-white shadow-md'>
        <div className='flex justify-between items-center p-4'>
           {/* Show logout button if user is logged in*/}
           
           {user &&(
            <div className='mt-3 text-gray-400 ml-4'><LogoutButton /></div>
           )}
           
             {/*Navigation links  */}
            <ul className='ml-10 flex gap-6 text-blue-700 font-bold mt-5'>
                <li><Link to = "/">Home</Link> </li>
                <li><Link to ="/features">Features</Link> </li>
                <li><Link to = "/about" >About</Link> </li>
                <li><Link to = "/contact">Contact</Link> </li>
            </ul> 
            </div>          
  </nav>
</div>  
)}

export default NavBar;