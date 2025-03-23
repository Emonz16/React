import { useState } from 'react'
import './App.css'
import Counter from './Count'
import Call from './Ball'

function App() {
 
  const handleClick = () => {
    console.error('Button clicked!')
      alert('Button clicked!')
  }

  return (
    <>
    
      <h3>Vite + React</h3>

      <button onClick={handleClick}>Click Here</button>
      
      
      <Call></Call>

    </>
  )
}

export default App
