import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'


class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      task: ""
    }
  }

  addTask = ((string) => {
    const tasksClone = [{ 
      description: string, 
      status: "To do" }
      
      ,...this.state.tasks]
    
    this.setState({tasks: tasksClone})
  })

  handleTaskDescriptionChange = ((e) => {
    this.setState({ task: e.target.value })
  })

  handleSubmit = ((e) => {
    e.preventDefault()
    this.addTask(this.state.task)
    this.setState({task: ""}) 
  })

  render() {
    console.log(this);
    return (

      <>
      <h1 className="text-3xl font-bold">
      ToDo List
    </h1>

    <Form 
      submitTask={this.handleSubmit}
      inputText={this.state.task}
      changeInput={this.handleTaskDescriptionChange}
    />
      
      </>
      
    
    )
  }
}

export default App