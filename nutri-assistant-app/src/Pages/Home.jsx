import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Home() {

const navigate = useNavigate();
 
return (
  
       <div  className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/gold.jpg')" }}>
        
       <div className='w-full sm:w-3/4 mx-auto bg-orange-200 p-6 rounded-lg shadow-xl bg-opacity-70'>
       <div className='mt-5 mb-6 p-6 bg-gray-200 bg-opacity-90 rounded-lg shadow-lg'>
          <h1 className='text-4xl font-bold text-[#34495e] mb-4'>Take Charge of Your Nutritional Health</h1>
          <p className='text-lg text-[#2c3e50] mb-5'>Easily track your body measurements, receive expert nutritional assessments, and connect with certified nutritionists for personalized consultations. Explore healthy, delicious recipes designed to support your wellness goals.</p>
        </div>

          <div className='flex justify-center items-center'>
            <button onClick={()=>navigate("/auth-page")} 
            className='bg-red-400 text-white px-6 py-3 rounded-lg shadow-md transition duration-300'>Get Started</button>
          </div>
          
          {/* Cards */}
          <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-10 mt-10'>
            <div className='w-full md:w-1/3 border border-gray-400 p-6 rounded-md bg-gradient-to-r from-[#3498db] to-[#8e44ad] shadow-xl text-white'>

              <h2 className='text-lg font-semibold'>Track Measurements</h2>
              <p className='text-sm leading-5'>Record and monitor your anthropometric data over time.</p>
            </div>
            
            <div className='w-full md:w-1/3 border border-gray-400 p-6 rounded-md bg-gradient-to-r from-[#3498db] to-[#8e44ad] shadow-xl text-white'>

              <h2 className='text-xl font-semibold'>Nutrition Consultation</h2>
              <p className='text-sm leading-5'>Get expert advice tailored to your health—book a session with a nutritionist..</p>
            </div>

            <div className='w-full md:w-1/3 border border-gray-400 p-6 rounded-md bg-gradient-to-r from-[#3498db] to-[#8e44ad] shadow-xl text-white'>

              <h2 className='text-xl font-semibold'>Healthy Recipes</h2>
              <p className='text-sm leading-5'>Discover recipes that align with your nutritional needs.</p>
            </div>
          </div>
       </div>
       </div>
  )
}

export default Home;