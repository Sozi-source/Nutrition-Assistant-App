import React, { useState } from 'react'
import useNutritionStore from '../store/useNutritionStore'

const UserInputForm =()=> {

  const {setNutritionData} = useNutritionStore();
  const[formVisible, setFormVisible] = useState(false)
  const[formData, setFormData] =useState({
    gender: "",
    weight: "",
    height: "",
    waist: "",
    hip: "",
  })

 const handleFormToggle =()=>{
  setFormVisible(!formVisible)
 };

  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData((prevData)=>  ({...prevData, [name]: value,}))
  }
  
    const handleSubmit=(e)=>{
    e.preventDefault();

    // Update Zustand with user input
     setNutritionData(formData)
     
        setFormData({gender: "", weight: "", height: "", waist: "", hip: ""})

         // Store data in local storage
      localStorage.setItem("User Data", JSON.stringify(formData))
}
   
    

  return (
   
  <div className='flex justify-center items-center '>
    {/* Button to toggle form visibility */}

    <form onSubmit={handleSubmit} 
      className= ' bg-white shadow-lg rounded-lg p-4 mx-auto border border-gray-300 justify-center items-center mt-[80px]'>             
         <h1 className='text-2xl font-semibold bg-blue-50 shadow-sm text-gray-500 font-serif'>Anthropometric Data</h1>
         <p className='mt-3 font-serif'>Enter your measurements</p>
          
          <div className='flex flex-col'>
            <label htmlFor="gender" className='font-serif font-semibold'>Gender</label>
            <select name="gender" id="gender" value={formData.gender} onChange={handleChange}
            className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center'>
              <option value="" className='font-serif font-semibold'></option>
              <option value="male" className='font-serif font-semibold'>Male</option>
              <option value="female" className='font-serif font-semibold'>Female</option>

            </select>
          </div>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
         <div className='flex flex-col'>
         <label htmlFor="weight" className='font-serif font-semibold'>Weight(Kg) </label>
          <input type="number" name='weight' value={formData.weight} onChange={handleChange} 
          className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
          </div>
         
         <div className='flex flex-col'>
         <label htmlFor="height"className='font-serif font-semibold' >Height(cm)</label>
          <input type="number" name='height' value={formData.height} onChange={handleChange} step={"any"}
          className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
         </div>
                      
          <div className='flex flex-col'>
          <label htmlFor="waist" className='font-serif font-semibold'>Waist(cm) </label>
          <input type="number" name='waist' value={formData.waist} onChange={handleChange}
          className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
          </div>
                      
          <div className='flex flex-col'>
          <label htmlFor="hip" className='font-serif font-semibold'>Hip(cm)</label>
          <input type="number"name='hip' value={formData.hip} onChange={handleChange}
          className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
          </div>
          <button type='submit' className=' sticky p-3 font-serif font-semibold bg-blue-300 rounded-sm hover:bg-yellow-300 animate-pulse' >Submit</button>
         </div>
                                 
      </form> 
    
  </div>
  
   
  
  )
}

export default UserInputForm;