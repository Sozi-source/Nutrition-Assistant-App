import { create } from "zustand";

import React from 'react'

const useNutritionStore =create((set)=>({
    gender: "",
    weight: "",
    height: "",
    waist: "",
    hip:"",
    
    setNutritionData: (newData)=>set((state)=>({...state, ...newData}))
}));
export default useNutritionStore;