import React, { useState } from 'react'

function UserInputForm() {
    const[weight, setWeight]= useState("")
    const[height, setHeight]= useState("")
    const[waist, setWaist]= useState("")
    const[hip, setHip]= useState("")
    const[errors, setErrors]= useState(null)

    const handleSubmit=(e)=>{
        e.preventDefault();

    const newUserData ={
        Weigth: weight.trim(),
        Height: height.trim(),
        Waist: waist.trim(),
        Hip: hip.trim()
    }
    
    console.log("User Data:", newUserData)

    }


  return (
   <>
    <div>
        <h1>User Data Input</h1>
    </div>

    <div>
        <form onSubmit={handleSubmit}> 
            <div>
            <label htmlFor="weight">Weight</label>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>

            <div>
            <label htmlFor="height">Height</label>
            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>

            <div>
            <label htmlFor="waist">Waist Measurements (Cm) </label>
            <input type="number" value={waist} onChange={(e)=>setWaist(e.target.value)} />
            </div>

            <div>
            <label htmlFor="hip">Hip Measurements (Cm)</label>
            <input type="number" value={hip} onChange={(e)=>setHip(e.target.value)} />
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>


        </form>
    </div>
   </>
  )
}

export default UserInputForm;