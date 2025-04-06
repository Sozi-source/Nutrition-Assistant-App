import React from 'react'

function Footer() {
  return (
    <div>
        <div>
        <h2>Contact Us</h2>
        <p>Phone:+254711390861 </p>
        <p>Email: osozi@gmail.com</p>
        
        </div>
        <div>
        <h2>Quick Links</h2>
        <ul>
                <li><Link to = "/">Home</Link> </li>
                <li><Link to = "/about" >About</Link> </li>
                <li><Link to = "/contact">Contact</Link> </li>
            </ul> 
        </div>
        <h2>Copyright</h2>
        <p>© 2025 NutriWise. All rights reserved.</p>
        <div>
        <h2></h2>

        </div>
    </div>
  )
}

export default Footer;