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
        <div className='flex flex-col md:flex-row justify-between items-center gap-4'>

          {/* Logo */}
          <div>
            <Link to = "/">
            <img src="/images/Logo2.jpg" alt="" className='h-15 w-20 border border-blue-300'/>
            </Link>
          </div>             
           
             {/*Navigation links  */}
            <ul className='ml-10 flex gap-6 text-blue-700 font-bold text-xl'>
                <li><Link to = "/">Home</Link> </li>
                <li><Link to = "/about" >About</Link> </li>
                <li><Link to = "/contact">Contact</Link> </li>
            </ul> 
              {/* Show logout button if user is logged in*/}
            
             
            </div>                 
  </nav>
      <div>
            {user &&(
              <div className='w-full sm:w-auto flex justify-center sm:justify-end mr-15'>
                  <LogoutButton />
              </div>
      )} 
      </div> 

</div>  
)}

export default NavBar;