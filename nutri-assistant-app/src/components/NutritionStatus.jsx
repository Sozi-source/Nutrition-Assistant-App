import React, { useEffect, useState } from 'react'
import useNutritionStore from '../store/useNutritionStore'
import { useNavigate } from 'react-router-dom';

function NutritionStatus() {
  const{gender, weight, height, waist, hip} =useNutritionStore((state)=>state)
  const navigate = useNavigate();

  const[isdataSubmitted, setIsdataSubmitted] = useState(false);
  const [bmi, setBmi] =useState(null);
  const [whr, setWhr] =useState(null);

  useEffect(() => {
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
    
    const calculatedBmi = calculateBmi(); 
    const calculatedWhr = calculateWhr();
    setIsdataSubmitted(calculatedBmi !== null && calculatedWhr !== null);

    setBmi(calculateBmi);
    setWhr(calculateWhr);
  }, [weight, height, waist, hip]);

  const bmicategory =()=>{
    if (!bmi) return null
    if (bmi < 18.5) return {label: "Underweight", color: "text-yellow-500"};
    if (bmi >= 18.5 && bmi <= 24.9 )return {label: "Normal Weight", color: "text-green-400"};
    if (bmi >= 25.0 && bmi <= 29.9 ) return {label: "Overweight", color: "text-purple-500"};
    if (bmi >= 30.0 && bmi <= 34.9) return {label: "Obese (Class I)", color: "text-red-500"};
    if (bmi >= 35.0 && bmi <= 39.9) return {label: "Obese (Class II)", color: "text-red-700"};
    if (bmi > 40.0) return {label: "Obese (Class III)", color: "text-red-900"};

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



return (

     <div className='w-full max-w-[1100px] p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-[80px] mx-auto'>
      
      {/* Conditionally render Heading */}
      {isdataSubmitted && (
        <div>
          <h2 className='text-2xl font-bold text-gray-500 font-serif'>Nutrition Status</h2>
          <p className='text-gray-500 font-serif text-xl'>Your comprehensive assessment !</p>
        </div>
      )}

      {/* Show message before data is submitted */}
      {!isdataSubmitted &&(
        <p>Please submit your data to see your results</p>
      )}
  
          
      {/* Show results after submission */}
      {isdataSubmitted && bmi && whr &&(

    <div>

      <div className='flex flex-col md:flex-row mt-5 justify-between gap-1'>
          {/* Display BMI */}
        <div className='border border-gray-200 p-2 rounded-lg shadow-md w-full md:w-2/3 text-center'>
            <h1 className='text-lg font-semibold'>Body Mass Index</h1>
            <p className='text-2xl font-bold'>{bmi} </p>
            <p className= {`${bmicategory()?.color} font-bold`}>{bmicategory()?.label} </p>
         </div>

          {/* Display WHR */}
         <div className='border border-gray-200 p-2 rounded-lg shadow-md w-full md:w-2/3 text-center'>
            <h1 className='text-lg font-semibold'> Waist-Hip Ratio </h1>
            <p className='text-2xl font-bold'>{whr} </p>
            <p className='text-orange-600 font-bold'>{classifyWhr(whr, gender)} </p>

         </div>
     </div>

  </div>
      )}

  {/* Show diet recommendation button after results */}
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
