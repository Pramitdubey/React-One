import React, { Component } from 'react'

export class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      comments:'',
      topic:'angular',
    }
    this.handleUserName=this.handleUserName.bind(this);
    this.handleComment=this.handleComment.bind(this);
    this.handletopic=this.handletopic.bind(this);
    this.handleSubmitForm=this.handleSubmitForm.bind(this);
  }

  handleUserName=(event)=>{
    this.setState({
      username:event.target.value
    })
  }

  handleComment=(event)=>{
    this.setState({
      comments:event.target.value
    })
  }

  handletopic=(event)=>{
    this.setState({
      topic:event.target.value
    })
  }

  handleSubmitForm=(event)=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <div>
            <label >Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUserName}></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea type='text' value={this.state.comments} onChange={this.handleComment}></textarea>
        </div>
        <div>
          <label>Topics</label>
          <select value={this.state.topic} onChange={this.handletopic}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form

