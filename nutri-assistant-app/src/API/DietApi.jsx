import axios from 'axios';
import { useState } from 'react';
import React from 'react';

function DietApi(){
  
  const [data, setData]= useState(null)
  const [error, setError] = useState(null)

  const fetchMeal =async()=>{
    try{
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
      setData(response.data);
      setError(null);
    }catch(err){
      setError("Failed to fetch data")
      console.error(err)
    }

  }
 
  return (
    <div className='flex justify-center items-center mt-[80px]'>
      <button onClick={()=> fetchMeal()}>Fetch Diet</button>

      {error && <p>{error} </p> }

      {/* Display Fetch Data */}
   {data &&(
    <div>
      <h1>Recommended Diets</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
   )}
    </div>
   )  
};

export default DietApi;
