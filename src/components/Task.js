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
      <div style={{border: '2px red solid'}}>
      
        <p>{this.state.task.description}</p>
        <p>{this.state.task.status}</p>
        {(this.state.currentView === "task")
          ?   <>
                <button className="border-solid border-2 border-red-600 ..." onClick={this.handleChangeViewClick}>Modify</button>
                <button className="border-solid border-2 border-indigo-600 ..." onClick={this.props.delete}>Delete</button>
              </>
          :   <form action="" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.task.description} onChange={this.handleTaskDescriptionChange}/>
                <select name="" id="" onChange={this.handleTaskStatusChange}>
                  <option value="To do">To do</option>
                  <option value="Doing">Doing</option>
                  <option value="Done">Done</option>
                </select>
                <button className="border-solid border-2 border-indigo-600" type='submit'>Valider</button>
              </form>
        }
        
        
      
      </div>
    )
  }
}

export default Task