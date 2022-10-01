
import './App.css';

import { useState } from 'react';
import Header from './components/Header';
import InputContainer from './components/InputContainer';
import Button from './components/Button';
import ResultContainer from './components/ResultContainer';

function App() {
  /**
   * State Variables initially set to zero
   */
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [result,setResult] = useState(0)
  return (
    <div className="container">
    <main className="form-signin w-100 m-auto">
    <form>
    <Header header="BMI Calculator" />
  
    <InputContainer input1label="Weight (kg)" input2label="Height (cm)" input1placeholder="weight in kg" input2placeholder="height in cm" weight={weight} setWeight={setWeight} height={height} setHeight={setHeight} />
    
    <Button weight={weight} height={height} setWeight={setWeight} setHeight={setHeight} setResult={setResult} buttonValue="Calculate" />
    
    <ResultContainer result_header="Calculated BMI" result={result} />
    </form>

  </main>
  </div>
  );
}

export default App;
