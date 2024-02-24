import React, { Component } from 'react'

export class PropsClass extends Component {
  render() {
    //destructuring props
    const {name, cl} = this.props;

    return (
      <div>
        <h3>
        Hello this is {name}, currently in class {cl}
        </h3>
      </div>
    )
  }
}

export default PropsClass
