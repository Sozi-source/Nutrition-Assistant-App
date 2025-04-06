import axios from 'axios';
import { use } from 'react';
import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function DietApi(){
  
  const [data, setData]= useState(null);
  const [error, setError] = useState(null)
  const [query, setQuery] = useState("")

  const navigate = useNavigate();


  const fetchMeal =async()=>{
    if(!query.trim()){
      setError("Please enter a dish name");
      setData(null);
      return;
    }

    try{
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);

      if(response.data.meals){
      setData(response.data.meals);
      setError(null);
      } else{
        setError("No recipes found");
        setData(null);
      }
    }catch(err){
      setError("Failed to fetch data")
      console.error(err)
    }

  }
 
  return (
    <div className='flex flex-col items-center px-4 mt-[80px] bg-cover bg-center bg-no-repeat min-h-screen' style={{ backgroundImage: "url('/images/bg.jpg')" }}>
      <h1 className='text-2xl font-bold mb-6 font-serif'>Find a Recipe</h1>

      <div className='flex flex-col sm:flex-row items-center gap-4 mb-6 w-full max-w-md'>
      
       {/* Back Button */}
       <div className='flex'>
       <button onClick={()=>navigate("/nutrition-assessment")} 
       className='font-serif font-bold bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition'> Back</button>
       </div>

        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} 
        className='w-full border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white'/>
        
      {/* Recipe search button */}
        <button onClick={fetchMeal} 
        className='font-serif bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition'>Search</button>
      </div>

      {/* Error handling message */}
      {error && <p className='text-red-600 font-medium mb-4'>{error} </p> }
  
      {/* Display Fetch Data */}
    
      {data && (
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl'>
          {data.map((meal)=>(
            
            <div key={meal.IdMeal} className='bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-lg transition'>
              
              <img src= {meal.strMealThumb} alt= {meal.strMeal} className='w-full h-48 object-cover rounded-md mb-4'/>
              
              <h2 className='text-lg font-semibold mb-2'>{meal.strMeal} </h2>
              
              <p className='text-sm text-gray-600 mb-1'><strong>Category:</strong> {meal.strCategory} </p>
              
              <p className='text-sm text-gray-600'><strong>Instruction:</strong> {meal.strInstructions} </p>

              <p><strong>View on YouTube</strong>{meal.strYoutube}</p>
            </div>
          ))}

        </div>
      )}


    </div>
   )  
};

export default DietApi;
