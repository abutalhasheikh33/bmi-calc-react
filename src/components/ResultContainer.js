import React, { useState } from 'react'

export default function ResultContainer({result_header,result}) {
    
    
    
  return (
    <div className="well text-center border rounded">
      <h3 className="text-muted">{result_header}</h3>
      <h2><span className="label" title="">{isNaN(result)?0:result}</span></h2>
      <h4 className="text-muted">{
        (()=>{
            
            if(isNaN(result)){
                return "Enter valid values"
            }
            else if(result<18.5){
                return "Underweight"
            }
            else if(result<=25){
                return "Healthy"
            }
            else if (result<30){
                return "Overweight"
            }
            else {
                return "Obese"
            }
        })()
      }</h4>
  </div>
  )
}
