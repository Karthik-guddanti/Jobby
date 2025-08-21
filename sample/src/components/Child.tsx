import React from 'react'

interface Props{
    color:string
}

// function Child(props:Props) {
//     const {color} = props
//   return (
//     <div>
//       <h1>Child Component</h1>
//       <p>{color}</p>
//     </div>
//   )
// }


const Child: React.FC<Props> = ({color})=>{
    // const {colour} = props
    return (
        <div>
      <h1>Child Component</h1>
      <p>{color}</p>
     </div>
    )
}
export default Child
