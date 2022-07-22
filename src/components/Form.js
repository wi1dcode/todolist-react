import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      task: "",
    }
  }

  handleTaskDescriptionChange = ( (e) => {
    this.setState({ task: e.target.value })
  })

  handleSubmit = ( (e) => {
    e.preventDefault()
    this.props.addTask(this.state.task)
    this.setState({task: ""}) 
  })

  render() {
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleTaskDescriptionChange} value={this.state.task}/>
            <button className="border-solid border-2 border-indigo-600" type='submit'>Submit</button>
        </form>
      
      </>
    )
  }
}

export default Form
