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

    return (
      <div className="text-white mb-3 py-3 border-solid border-2 border-zinc-900 rounded-lg backdrop-blur-sm justify-between flex items-center px-5 shadow-lg shadow-stone-900/80 w-[90%] h-[62px]">
      
        
        {(this.state.currentView === "edit")
          ?   <form action="" onSubmit={this.handleSubmit} className="text-white flex justify-between w-full">
                  <div className='flex items-center w-[70%]'>
                    <input type="text" value={this.state.task.description} onChange={this.handleTaskDescriptionChange} className="bg-white border border-slate-300 rounded-lg py-1 pl-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-base text-black w-full flex "/>
                  </div>               
                  <div className='flex justify-between'>
                    <select name="" id="" onChange={this.handleTaskStatusChange} className="text-black border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-base w-[72px]
                    ">
                      <option value="To do">To do</option>
                      <option value="Doing">Doing</option>
                      <option value="Done">Done</option>
                    </select>
                    <button className="rounded-lg bg-green-600 hover:bg-green-700 active:bg-green-800 focus:outline-none py-1 pl-3 pr-3 text-white ml-2 text-white" type='submit'>Valider</button>
                  </div>
              </form>
          :  <div className='flex justify-between w-full'>
              <div className='flex align-center truncate w-[70%]'>
                <p className='font-medium drop-shadow-lg text-lg'>{this.state.task.description}</p>
              </div>
              <div className='flex items-center'>
            <p className='drop-shadow-lg mr-10'>{this.state.task.status}</p>
                <button className="rounded-lg bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800 focus:outline-none py-1 pl-3 pr-3 text-white mr-2" onClick={this.handleChangeViewClick}>Modify</button>
                  <button className="rounded-lg bg-red-600 hover:bg-red-700 active:bg-red-800 focus:outline-none py-1 pl-3 pr-3 text-white" onClick={() =>this.props.delete(this.props.index)}>Delete</button>
              </div>
            </div>
        }
        
        
      
      </div>
    )
  }
}

export default Task