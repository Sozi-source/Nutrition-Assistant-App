import React, { useState } from 'react'

function Contacts() {

const[formdata, setFormdata] = useState({
  name: "",
  email: "",
  phone: "",
  message: ""
})

const handleChange = (e)=>{
  setFormdata({...formdata, [e.target.value]: e.target.value,

  });
};

const handleSubmit =(e)=>{
  e.preventDefault();
}

  return (
    <div className='flex justify-center items-center bg-blue-100 shadow-2xl'>
      <form>

        <div>
        <label htmlFor="name" >Full Name</label>
        <input type="text" value={formdata.name} onChange={handleChange} required/>
        </div>

        <div>
        <label htmlFor="email" >Email</label>
        <input type="email" value={formdata.email} onChange={handleChange} required/>
        </div>

        <div>
        <label htmlFor="phone" >Phone Number</label>
        <input type="text" value={formdata.phone} onChange={handleChange}/>
        </div>

        <div>
        <label htmlFor="message" >Message</label>
        <textarea name="message" value={formdata.message} onChange={handleChange} required ></textarea>
        </div>

        <div>
        <button onClick={handleSubmit}>Send Message</button>
        </div>
      </form>

    </div>
  )
}

export default Contacts;