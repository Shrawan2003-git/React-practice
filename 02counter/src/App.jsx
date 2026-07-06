import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [Counter,setCounter]=useState(0)
  // let [lessvalue,setlessvalue]=useState(Counter)

  const addvalue=()=>{
      Counter=Counter+1 
      setCounter(Counter)
      console.log("Added:",Counter);
    }

    const decvalue=()=>{
      setCounter(Counter-1)
    }
  return (
    <div>
      <h1>Hooks tutorial Counter</h1>
      <h3>Counter Value: {Counter}</h3>

      <button onClick={addvalue}>Add {Counter}</button>
      <br />
      <button onClick={decvalue}>Reduce {Counter}</button>
    </div>
  ); 
}

export default App
