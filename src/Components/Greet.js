import React from "react";

function greet(props){
return(
    <div>
    <h1>Hi {props.name} </h1>
    <h1>Adress: {props.city}</h1>
    {props.children}
    
    </div>
)
}

export default greet