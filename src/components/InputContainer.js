import React, { useState } from 'react'

export default function InputContainer({input1label,input2label,input1placeholder,input2placeholder,weight,setWeight,height,setHeight}) {
   

  return (
    <div id="metric" ng-show="units == 'metric'">
    <div className="form-group">
      <label for="weight_kg">{input1label}</label>
      <input onChange={(e)=>setWeight(e.target.value)} value={weight} type="number" ng-model="weight_kg" 
      id="weight_kg"
      placeholder={input1placeholder} className="form-control" />    
    </div>
    
    <div className="form-group">
      <label for="height_cm">{input2label}</label>
    
      <input onChange={(e)=>setHeight(e.target.value)} value={height}  type="number" ng-model="height_cm" 
      id="height_cm"
      placeholder={input2placeholder} className="form-control" />    
    </div>
    
</div>
  )
}
