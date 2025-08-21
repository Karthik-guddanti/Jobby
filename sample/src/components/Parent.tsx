import Child from "./Child"

function Parent() {
    const color = "Red"
  return (
    <div>
      <h1>Parent Component</h1>
      <Child color={color}/>
    </div>
  )
}

export default Parent
