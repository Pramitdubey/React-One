import React from 'react'

function ChildComp(props) {
  return (
    <div>
      <button onClick={()=>props.childHandler("Hello from child")}>Greet Parent</button>
    </div>
  )
}

export default ChildComp

