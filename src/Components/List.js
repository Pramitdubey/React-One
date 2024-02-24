import React from 'react'
import ListItem from './ListItem'

function List() {
    const persons =[
        {
            id:1,
            name:'Ajay',
            age:30,
            skills:'React'
        },
        {
            id:2,
            name:'Vijay',
            age:40,
            skills:'Angular'
        },
        {
            id:3,
            name:'Sanjay',
            age:50,
            skills:'Java'
        }
        
    ]

    const personList= persons.map((person)=><ListItem key={person.id} value={person}/>)

  return (
    <div>
        {personList}
    </div>
  )
}

export default List
