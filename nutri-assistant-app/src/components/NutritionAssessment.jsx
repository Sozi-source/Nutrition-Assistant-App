import React from 'react'
import UserInputForm from './UserInputForm';
import NutritionStatus from './NutritionStatus';

function NutritionAssessment() {
  return (
    <div className='flex flex-row w-full h-screen mt-15'>
        <div className='w-1/2 p-4'>
        <UserInputForm />
        </div>

        <div className='w-1/2 p-4'>
        <NutritionStatus />
        </div>

    </div>
  )
}

export default NutritionAssessment;