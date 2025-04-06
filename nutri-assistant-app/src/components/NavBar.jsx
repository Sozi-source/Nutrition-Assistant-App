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
      
      <nav className='w-full h-25 bg-white text-white p-4 shadow-md'>
        <div className='flex justify-between items-center p-4'>

          {/* Logo */}
          <div>
            <Link to = "/">
            <img src="/images/Logo2.jpg" alt="" className='h-15 w-20 border border-blue-300'/>
            </Link>
          </div>
           {/* Show logout button if user is logged in*/}
           
          
           
             {/*Navigation links  */}
            <ul className='ml-10 flex gap-6 text-blue-700 font-bold text-xl'>
                <li><Link to = "/">Home</Link> </li>
                <li><Link to = "/about" >About</Link> </li>
                <li><Link to = "/contact">Contact</Link> </li>
            </ul> 
            <div>
            {user &&(
            <div className='flex-1 flex justify-between'><LogoutButton /></div>
           )} 
            </div>  
            </div> 
            
                 
  </nav>
</div>  
)}

export default NavBar;