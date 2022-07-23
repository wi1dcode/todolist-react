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
      status: "To do"
      },...this.state.tasks]
    
    this.setState({tasks: tasksClone})
  })


  deleteTask = ( (index) => {
    const tasksClone = [...this.state.tasks]
    tasksClone.splice(index, 1)
    this.setState({
      tasks: tasksClone
    })
  })

  modifyTask = ( (task, index) => {
    const tasksClone = [...this.state.tasks]
    tasksClone[index] = task
    this.setState({
      tasks: tasksClone
    })
  })


  render() {
    // console.log(this.state);
    return (

      <div className='flex flex-col justify-center col items-center'>
        <h1 className="text-3xl font-bold text-center	text-white mt-10 mb-10">Todolist React</h1>
        <Form 
          addTask={this.addTask}
        />
        <List 
          tasks = {this.state.tasks}
          delete = {this.deleteTask}
          modify = {this.modifyTask}
        />
          
      </div>
      
    
    )
  }
}

export default App