import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  return (
    <div>
          {/* Nav Links */}
     <nav className='fixed top-0 w-full bg-white shadow-md py-2'>
            <ul className='flex justify-center gap-6 text-blue-700 font-bold'>
                <li><Link to = "/">Home</Link> </li>
                <li><Link to ="features">Features</Link> </li>
                <li><Link to = "about" >About</Link> </li>
                <li><Link to = "contact">Contact</Link> </li>
            </ul>
        </nav>

    </div>
  )
}

export default NavBar