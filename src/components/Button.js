import React from 'react'

export default function Button({buttonValue,weight,height,setWeight,setHeight,setResult}) {
    /**
     * Calculates bmi 
     * first converts height from m to cm and then calls setResult to change the state and then set the inputs to default 0
     * @param {object} e event object use to stop default behaviour so that form does not force the page to refresh 
     */
    const handleSubmit = (e)=>{
        e.preventDefault()
        const heightInM=height/100
        setResult((weight/(heightInM*heightInM)).toFixed(0))
        setWeight(0)
        setHeight(0)

    }
  return (
    
  <button onClick={(e)=>handleSubmit(e)} className="w-100 btn btn-lg btn-primary mt-3 mb-3" type="submit">{buttonValue}</button>
  )
}
