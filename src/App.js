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
      <main className='flex flex-col items-center h-screen p-8'>
        <header className='w-full flex justify-end gap-4'>
          <button onClick={() => this.handleFilterClick("")} className="rounded-lg border-2 border-zinc-600 bg-zinc-600 hover:bg-transparent backdrop-blur-sm hover:border-zinc-700 active:border-zinc-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20">All</button>
          <button onClick={() => this.handleFilterClick('To do')} className="rounded-lg border-2 border-rose-600 bg-rose-600 hover:bg-transparent backdrop-blur-sm hover:border-rose-700 active:border-rose-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20">To do</button>
          <button onClick={() => this.handleFilterClick("Doing")} className="rounded-lg border-2 border-yellow-600 bg-yellow-600 hover:bg-transparent backdrop-blur-sm hover:border-yellow-700 active:border-yellow-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20">Doing</button>
          <button onClick={() => this.handleFilterClick("Done")} className="rounded-lg border-2 border-green-600 bg-green-600 hover:bg-transparent backdrop-blur-sm hover:border-green-700 active:border-green-800 focus:outline-none py-2 pl-3 pr-3 text-white w-20">Done</button>
        </header>
        <section className="w-full mt-10">
        <h1 className="text-4xl font-bold	text-white mt-10 mb-10 text-center">To do list React</h1>
        </section>
        <section className='w-full'>
          <Form 
            addTask={this.addTask}
          />
        </section>
        <section className="overflow-x-auto w-full flex justify-center flex-wrap">
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