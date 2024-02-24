import React from 'react'

function ListItem(props) {
  return (
    <div>
      <h2>
        I am {props.value.name}, I am of {props.value.age} years. I know {props.value.skills}.
      </h2>
    </div>
  )
}

export default ListItem
