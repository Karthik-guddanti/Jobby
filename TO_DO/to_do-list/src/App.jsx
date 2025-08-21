import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const [taskarr,setTaskarr] = useState([])

  const addTask =() => {
    const newTask = value
    const newTaskarr = [...taskarr,newTask]
    setTaskarr(newTaskarr)
  }

  const set = (event) =>{
    setValue(event.target.value)
  }

  return (
    <>
    <div>
      <input type='type' placeholder={"TO DO List"} value={value} onChange={set}/>
      <button onClick={addTask}>Submit</button>
      <ul>
        {taskarr.map((item) => <li>{item}</li>)}
      </ul>
    </div>
    </>
  )
}

export default App
