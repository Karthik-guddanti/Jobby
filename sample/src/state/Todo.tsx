import React from "react"
import { useState } from "react"
const StateEx: React.FC = ()=>{
    const [value,setValue] = useState('')
    const [arr,setarr] = useState<string[]>([])

    function Clicked(){
        setarr([...arr,value])
        setValue('')
    }
     return(
        <>
           <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button onClick={Clicked}>Add</button>
           {arr.map((item, idx) => {
            return <p key={idx}>{item}</p>
        })}  
        </>
    )
}

export default StateEx