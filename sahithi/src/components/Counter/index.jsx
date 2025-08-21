import { useState } from "react"
function Counter() {
  const [num,setNum] = useState(0);

  function onIncrement() {
    setNum(num + 1);
  }
  function onDecrement() {
    setNum(num - 1);
  }
  return (
    
    <div>
      <button onClick={onIncrement}>Increment</button>
      <h1>{num}</h1>
      <button onClick={onDecrement}>Decrement</button>

    </div>
  )
}

export default Counter

