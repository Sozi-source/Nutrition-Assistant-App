import React from 'react'
import UserInputForm from './UserInputForm';
import NutritionStatus from './NutritionStatus';
import UserProfile from '../Pages/Profile';

function NutritionAssessment() {
  return (
    <div className='flex justify-center items-centre w-full'>
        
        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 mt-5'>
        <UserInputForm />
        </div>

        <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 mt-5'>
        <NutritionStatus />
        
        </div>
        
        {/* <div className='sm:w-1/2 md:w-1/2 lg:w-1/2 p-2 mt-[120px] border border-gray-400 w-2'>
        <UserProfile />
        </div> */}
        </div>
    
  )
}

export default NutritionAssessment;