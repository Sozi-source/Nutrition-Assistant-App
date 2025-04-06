// import React from 'react'
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className='flex justify-centre items-center gap-6 bg-white'>
//         <div>
//         <h2>Contact Us</h2>
//         <p>Phone:+254711390861 </p>
//         <li>Email: <a href="mailto:osoziw@gmail.com" className="underline">osoziw@gmail.com</a></li>
        
//         </div>
//         <div>
//         <h2>Quick Links</h2>
//         <ul>
//                 <li><Link to = "/">Home</Link> </li>
//                 <li><Link to = "/about" >About</Link> </li>
//                 <li><Link to = "/contact">Contact</Link> </li>
//             </ul> 
//         </div>
        
//         <div>
//         <h2>Copyright</h2>
//         <p>© 2025 NutriWise. All rights reserved.</p>

//         </div>
//     </div>
//   )
// }

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Contact Us Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400 mb-2">Phone: <span className="text-gray-200">+254711390861</span></p>
          <p className="text-gray-400">
            Email: <a href="mailto:osoziw@gmail.com" className="text-gray-200 underline">osoziw@gmail.com</a>
          </p>
        </div>
        
        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200">Contact</Link>
            </li>
          </ul>
        </div>
        
        {/* Copyright Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Copyright</h2>
          <p className="text-gray-400">© 2025 Healthy-Life. All rights reserved.</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
      </div>
    </div>
  );
}

export default Footer;
