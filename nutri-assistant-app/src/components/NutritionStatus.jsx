import React, { useEffect, useState } from 'react'
import useNutritionStore from '../store/useNutritionStore'
import { useNavigate } from 'react-router-dom';

function NutritionStatus() {
  const{gender, weight, height, waist, hip} =useNutritionStore((state)=>state)
  const navigate = useNavigate();


  const numweight = parseFloat(weight) ||0;
  const numheight = parseFloat(height) ||0;
  const numwaist = parseFloat(waist) ||0;
  const numhip = parseFloat(hip) ||0;


  const calculateBmi =()=>{
    if(numweight && numheight){
      return (numweight/(numheight/100)**2).toFixed(1);
    }
    return null;
  }
  
  const calculateWhr =()=>{
    if(numwaist && numhip){
      return(numwaist/numhip).toFixed(1)
    }
    return null
  }
  
  const bmi = calculateBmi(); 
  const whr =calculateWhr()

  const bmicategory =()=>{
    if (!bmi) return null
    if (bmi < 18.5) return "Underweight"
    if (bmi >= 18.5 && bmi <= 24.9 )return "Normal Weight"
    if (bmi >= 25.0 && bmi <= 29.9 ) return "Overweight"
    if (bmi >= 30.0 && bmi <= 34.9) return "Obese (Class I)"
    if (bmi >= 35.0 && bmi <= 39.9) return "Obese (Class II)"
    if (bmi > 40.0) return "Obese (Class III)"

  }
  
  const classifyWhr =(whr, gender)=>{
    if(!whr)return ""
    if(gender==="male"){
      if(whr <= 0.95) return "Low risk of metabolic complications"
      if(whr >= 0.96 && whr <=1.0) return "Moderate risk of metabolic complications"
      return "High risk of metabolic complications"
    }
    else{
      if(whr <= 0.80) return "Low risk of metabolic complications"
      if(whr >= 0.81 && whr <=0.85) return "Moderate risk of metabolic complications"
      return "High risk of metabolic complications"
    }
}

// function to hide diet recommendation buttons
const[isdataSubmitted, setIsdataSubmitted] = useState(false);

useEffect(()=>{
  setIsdataSubmitted(bmi !== null);
}, [bmi])

return (

     <div className='w-full max-w-[1100px] p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-[80px] mx-auto'>
      <h1 className='text-3xl font-bold text-gray-500 font-serif'>Nutrition Status</h1>
      <p className='text-gray-500 font-serif text-xl'>Your comprehensive assessment !</p>
      {bmi && (

    <div>
      
      <div className='w-full p-6 bg-white shadow-lg rounded-lg text-center border border-gray-200'>
            <h1>Overall Assessment</h1>
            <p> </p>
      </div>

      <div className='flex flex-col md:flex-row mt-5 justify-between gap-1'>

        <div className='border border-gray-200 p-2 rounded-lg shadow-md w-full md:w-2/3 text-center'>
            <h1 className='text-lg font-semibold'>Body Mass Index</h1>
            <p className='text-2xl font-bold'>{bmi} </p>
            <p className='text-green-600 font-bold'>{bmicategory()} </p>
         </div>

         <div className='border border-gray-200 p-2 rounded-lg shadow-md w-full md:w-2/3 text-center'>
            <h1 className='text-lg font-semibold'> Waist-Hip Ratio </h1>
            <p className='text-2xl font-bold'>{whr} </p>
            <p className='text-orange-600 font-bold'>{classifyWhr(whr, gender)} </p>

         </div>
     </div>

  </div>
      )}

  {/* Show data if BMI exist */}
  {isdataSubmitted &&(
    <div className='flex justify-center items-center mt-6 gap-4'>
    <div>
        <button onClick={()=>navigate("/diet-api")} className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition'>Get Diet Recommendations </button>
    </div>

</div>
  )}

  </div>
  
)
}

export default NutritionStatus;