import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Contacts() {

const navigate = useNavigate();

const[formdata, setFormdata] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const handleChange = (e)=>{
  setFormdata({...formdata, [e.target.name]: e.target.value,

  });
};

const handleSubmit =(e)=>{
  e.preventDefault();
  setFormdata({
    name: "",
    email: "",
    phone: "",
    message: "",
   });
  };
  return (
    <div className='flex justify-center items-center bg-blue-50 min-h-screen py-5 px-4 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md sm:max-w-md space-y-2 bg-white p-3 shadow-lg rounded-lg'>
         
        <div className='flex'>
          
        </div>
        <h1 className='text-3xl font-bold text-center text-gray-900'>Contact Us</h1>
      
      <form onSubmit={handleSubmit}>

         {/* Back Button */}
         <button onClick={()=>navigate("/nutrition-assessment")} className='mt-[80px] absolute top-6 left-6 bg-blue-400 px-4 py-2 rounded-md shadow-md text-gray-700 hover:bg-gray-200 transition'>Back</button>

          <div className=''>
          <label htmlFor="name" className='block text-lg font-medium text-gray-700'>Full Name</label>
          <input type="text" value={formdata.name} name='name'  onChange={handleChange} required 
          className='p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          </div>

          <div className=''>
          <label htmlFor="email" className='block text-lg font-medium text-gray-700'>Email</label>
          <input type="email" value={formdata.email} name='email' onChange={handleChange} required 
          className='mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          </div>
          
          <div className=''>
          <label htmlFor="phone" className='block text-lg font-medium text-gray-700'>Phone Number</label>
          <input type="text" value={formdata.phone} name='phone' onChange={handleChange} 
          className='p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
          </div>

          <div className=''>
          <label htmlFor="message" className='block text-lg font-medium text-gray-700'>Message</label>
          <textarea name="message" value={formdata.message} onChange={handleChange} required rows= "3"
          className='p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' ></textarea>
          </div>

          <div>
          <button type='submit' className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'>Send Message</button>
          </div>
          </form>

      </div>
    </div>
  )
}

export default Contacts;