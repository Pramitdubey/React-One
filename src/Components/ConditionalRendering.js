import React, { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true,
            isAdmin: true
        }
    }

  render() {

    // if(this.state.isLoggedIn){
    //     return(<h3>Welcome User</h3>)
    // }
    // else{
    //     return(<h3>Welcome Guest</h3>)
    // }

    //Ternary Operator
    return(this.state.isLoggedIn && this.state.isAdmin?<h3>Welcome Admin</h3> : <h3>Welcome Guest</h3>)
    
  }
}

export default ConditionalRendering
