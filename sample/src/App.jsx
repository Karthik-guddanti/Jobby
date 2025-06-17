
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function onIncrement(){
    setCount(count+1)
  }
  function onDecrement(){
    setCount(count-1)
  }
  
  return (
    <>
      <button onClick={onIncrement}>+</button>
      <div>{count}</div>
      <button onClick={onDecrement}>-</button>
    </>
  )
}

export default App
