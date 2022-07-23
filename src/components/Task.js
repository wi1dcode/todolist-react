import React, { Component } from 'react'

 class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {
        description: this.props.task.description,
        status: this.props.task.status,
        currentView: this.props.currentView
      }
    }
  }

  handleTaskDescriptionChange = ((e) =>{
    const clonedTask = { ...this.state.task }
    clonedTask.description = e.target.value
    this.setState({
      task: clonedTask,
    })
  })

  handleTaskStatusChange = ((e) => {
    
    const clonedTask = { ...this.state.task }
    clonedTask.status = e.target.value
    this.setState({
      task: clonedTask,
    })
  })

  handleSubmit = ( (e) => {
    e.preventDefault()
    this.props.modify(this.state.task, this.props.index)
    this.setState({
      currentView: "task"
    })
  })

  handleChangeViewClick = ( () => {
    this.setState({
      currentView:  "edit"
    })
  })


  render() {
    // console.log(this.state);
    return (
      <div className="text-white w-2/5 text-center mb-3 py-3 border-solid border-2 border-zinc-900 rounded-lg backdrop-blur-sm flex justify-around items-center">
      
        <p className='font-medium drop-shadow-lg text-lg'>{this.state.task.description}</p>
        <p className='drop-shadow-lg mb-2'>{this.state.task.status}</p>
        {(this.state.currentView === "task")
          ?   <>
                <button className="rounded-lg bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 focus:outline-none py-1 pl-3 pr-3 text-white mr-2" onClick={this.handleChangeViewClick}>Modify</button>
                <button className="rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 focus:outline-none py-1 pl-3 pr-3 text-white" onClick={this.props.delete}>Delete</button>
              </>
          :   <form action="" onSubmit={this.handleSubmit} className="text-white flex justify-end">
                <input type="text" value={this.state.task.description} onChange={this.handleTaskDescriptionChange} className="bg-white border border-slate-300 rounded-lg py-1 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-base text-black"/>
                <select name="" id="" onChange={this.handleTaskStatusChange} className="text-black ml-3 border border-slate-300 rounded-lg py-1 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-base">
                  <option value="To do" className='rounded-full'>To do</option>
                  <option value="Doing" className='rounded-full'>Doing</option>
                  <option value="Done" className='rounded-full'>Done</option>
                </select>
                <button className="rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800 focus:outline-none py-1 pl-3 pr-3 text-white ml-3 text-white" type='submit'>Valider</button>
              </form>
        }
        
        
      
      </div>
    )
  }
}

export default Task