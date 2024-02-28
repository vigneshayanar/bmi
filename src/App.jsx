import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [height,setheigth]=useState('')
  const[weight,setwigth]=useState("")
  const[bmi,setbmi]=useState(null)
  const[bmistatus,setbmistatus]=useState("");
  const[error,seterror]=useState("");

  const setw=(e)=>{
    setwigth(e.target.value)
  }
  const seth=(e)=>{
    setheigth(e.target.value)
  }

  const cal=()=>{
    const isvalidheigth=/^\d+$/.test(height)
    const isvalidweigth=/^\d+$/.test(weight)
    if(isvalidheigth&&isvalidweigth){
      const heightmeter=height/100;
      const bmivalue=weight/(heightmeter*heightmeter)
      setbmi(bmivalue.toFixed(2))
      if (bmi<18.5){
        setbmistatus("underwigth");}
      else if (bmi>=18.5 && bmi<24.9){
        setbmistatus("Normal weight")
      }
      else{
          setbmistatus("Obese")
          setbmistatus("")
      }
      seterror(null)
    }
    else{
    setbmi(null)
    seterror("error please enter in numeric form ")

    }
  }
  const clear=()=>{
    setbmi(null)
    setheigth('')
    setwigth('')
    seterror('')
  }
  return (
    <>
    <div className='bmi'>
      <div className='box'></div>
      <div className='data'>
        <h1>bmi calculater</h1>
        <div className='error'>{error}</div>
        <div className='input'>
          <label htmlFor="height">Height(cm):</label>
          <input type="text" id="heigth" value={height} onChange={seth}/>
        </div>
        <div className='input'>
          <label htmlFor="weigth">weight(kg):</label>
          <input type="text" id='weight' value={weight} onChange={setw}/>
        </div>
        <button onClick={cal}>calculate</button>
        <button onClick={clear} style={{ backgroundColor: 'red', ':hover': { backgroundColor: 'blue' } }}>clear all</button>
       {bmi!==null &&<div className='result'>
          <p>Your Bmi is:{bmi}</p>
          <p>Status:{bmistatus}</p>
        </div>}
      </div>
    </div>
      
    </>
  )
}

export default App
