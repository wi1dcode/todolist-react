import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'


class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
    }
  }

  addTask = ( (string) => {
    const tasksClone = [{ 
      description: string, 
      status: "To do" }
      
      ,...this.state.tasks]
    
    this.setState({tasks: tasksClone})
  })


  deleteTask = ( (index) => {
    const tasksClone = [...this.state.tasks]
    tasksClone.splice(index, 1)
    this.setState({
      tasks: tasksClone
    })
  })

  modifyTask = ( (index) => {
    const tasksClone = [...this.state.tasks]
    this.setState({
      tasks: tasksClone
    })
  })

  render() {
    console.log(this.state);
    const {description, status} = this.state.tasks
    return (

      <>
        <h1 className="text-3xl font-bold">ToDo List</h1>
        <Form 
          submitTask={this.handleSubmit}
          inputText={this.state.task}
          changeInput={this.handleTaskDescriptionChange}
          addTask={this.addTask}
        />
        {this.state.tasks.map( (task, index) => {
          return (
            <List 
              descriptionTask={task.description}
              statusTask={task.status}
              deleteTask={ () => this.deleteTask(index)}
              modifyTask={ () => this.modifyTask(index)}
            />
          )
        })}
          
      </>
      
    
    )
  }
}

export default App