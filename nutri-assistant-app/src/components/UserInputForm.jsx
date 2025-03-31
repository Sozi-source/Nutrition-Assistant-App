import React, { useState } from 'react'
import useNutritionStore from '../store/useNutritionStore'

const UserInputForm =({className})=> {

  const {setNutritionData} = useNutritionStore()

    const[formData, setFormData] =useState({
    gender: "",
    weight: "",
    height: "",
    waist: "",
    hip: "",
  })

 

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
   
    
        <form onSubmit={handleSubmit} 
        className= 'w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[80%] bg-white shadow-lg rounded-lg p-6 mx-auto border border-gray-300'>             
           <h1 className='text-2xl font-semibold bg-blue-50 shadow-sm text-gray-500 font-serif'>Anthropometric Data</h1>
           <p className='mt-3 font-serif'>Enter your measurements</p>
            
            <div className='flex flex-col mt-5 '>
              <label htmlFor="gender" className='font-serif font-semibold'>Gender</label>
              <select name="gender" id="gender" value={formData.gender} onChange={handleChange}
              className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center'>
                <option value="" className='font-serif font-semibold'></option>
                <option value="male" className='font-serif font-semibold'>Male</option>
                <option value="female" className='font-serif font-semibold'>Female</option>

              </select>
            </div>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
           <div className='flex flex-col'>
           <label htmlFor="weight" className='font-serif font-semibold'>Weight Measure (Kg) </label>
            <input type="number" name='weight' value={formData.weight} onChange={handleChange} 
            className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
            </div>
           
           <div className='flex flex-col'>
           <label htmlFor="height"className='font-serif font-semibold' >Height Measure (Cm)</label>
            <input type="number" name='height' value={formData.height} onChange={handleChange} step={"any"}
            className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
           </div>
                        
            <div className='flex flex-col'>
            <label htmlFor="waist" className='font-serif font-semibold'>Waist Circumference (Cm) </label>
            <input type="number" name='waist' value={formData.waist} onChange={handleChange}
            className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
            </div>
                        
            <div className='flex flex-col'>
            <label htmlFor="hip" className='font-serif font-semibold'>Hip Circumference(Cm)</label>
            <input type="number"name='hip' value={formData.hip} onChange={handleChange}
            className= 'border border-gray-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center' />
            </div>
           </div>
                                   
            <button type='submit' className='p-3 mt-3 mb-5 font-serif font-semibold bg-blue-300 rounded-sm hover:bg-yellow-300 animate-pulse' >Submit</button>
            
        </form> 
  
   
  
  )
}

export default UserInputForm;