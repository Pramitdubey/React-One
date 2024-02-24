import React, { Component } from 'react'

export class State extends Component {

  //   constructor(){
  //       super();
  //       this.state={
  //           count: 0,
  //       }
  //   }

  //  increment(){
  //   this.setState({
  //       count:this.state.count+1
  //   },()=>{console.log(this.state.count)})
  //  }


  // render() {
  //   return (
  //     // Two Methods of binding
  //     <div>
  //       <h1>Count:{this.state.count}</h1> 
  //       <button onClick={()=>this.increment()}>Count</button>
  //       <button onClick={this.increment.bind(this)}>Click</button>
  //     </div>
  //   )
  // }

  // binding within the constructor(most desirable)
  constructor(){
    super();
    this.state={
      count:0,
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleClick}>Count</button>
      </div>
    )
  }
}

export default State
