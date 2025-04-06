import React from 'react'
import UserInputForm from './UserInputForm';
import NutritionStatus from './NutritionStatus';

function NutritionAssessment() {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/images/gold.jpg')" }}>
        
        <div className='min-w-[290px] sm:w-1/2 md:w-1/2 lg:w-1/2 p-2'>
        <UserInputForm />
        </div>

        <div className='min-w-[290px] sm:w-1/2 md:w-2/3 lg:w-3/4 p-2 mt-10'>
        <NutritionStatus />
        </div>
      
    </div>
    
  )
}

export default NutritionAssessment;