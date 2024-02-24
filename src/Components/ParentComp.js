import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(){
        super();
        this.state={
            ParentName:"Parent",

        }
        this.greetParent=this.greetParent.bind(this);
    }

    greetParent(child){
        alert(`Hello ${this.state.ParentName} from ${child}`)
    }

  render() {
    return (
      <div>
        <ChildComp childHandler={this.greetParent}/>
        
      </div>
    )
  }
}

export default ParentComp
