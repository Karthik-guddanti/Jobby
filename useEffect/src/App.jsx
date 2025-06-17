import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  function fetchDetails(){
    async function fn(){
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const user = await response.json();
      setData(user);
    }
    fn();
  }
useEffect(fetchDetails,[]);
console.log("render")
  return (
    <>
      {data == null ? <h1>Loading....</h1> :<div>
      <h1>Username:{data.username}</h1>
      <h2>Email:{data.email}</h2>
      <h2>Name:{data.name}</h2>
      </div>}
    </>
  )
}

export default App
