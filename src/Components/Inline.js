import React from 'react'

// CSS property name will be camel case and value will be a string
const heading={
    color:'red',
    fontSize:'80px',

}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Style using Inline</h1>
    </div>
  )
}

export default Inline
