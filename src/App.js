import React, { Component } from 'react'
import Form from './components/Form'
import List from './components/List'
import "./App.css"

class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      filter: ""
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

  handleFilterClick = ( (string) => {
    this.setState({
      filter : string
    })
    
  })

  render() {
    const filteredTasks = this.state.tasks.filter ( (task) => {
      return task.status === this.state.filter || this.state.filter === ""

    })
    return (

      <main className='flex flex-col items-center h-screen'>
        <header>
          <h1 className="text-3xl font-bold text-center	text-white mt-10 mb-10">Todolist React</h1>
        </header>
        <section className="flex gap-3">
          <button onClick={() => this.handleFilterClick("")} className="rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none py-2 pl-3 pr-3 text-white">All</button>
          <button onClick={() => this.handleFilterClick('To do')} className="rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none py-2 pl-3 pr-3 text-white">To do</button>
          <button onClick={() => this.handleFilterClick("Doing")} className="rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none py-2 pl-3 pr-3 text-white">Doing</button>
          <button onClick={() => this.handleFilterClick("Done")} className="rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none py-2 pl-3 pr-3 text-white">Done</button>
        </section>
        <section>
          <Form 
            addTask={this.addTask}
          />
        </section>
        <section className="overflow-x-auto">
          <List 
            tasks = {filteredTasks}
            delete = {this.deleteTask}
            modify = {this.modifyTask}
          />
        </section>
      </main>
      
    
    )
  }
}

export default App