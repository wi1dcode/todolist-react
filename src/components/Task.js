import React, { Component } from 'react'

 class Task extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: {
        description: this.props.task.description,
        status: this.props.task.status
      }
    }
  }

  // componentDidMount () {
  //   console.log(this.props);
  //   this.setState({
  //     task: {
  //       description: this.props.task.description,
  //       status: this.props.task.status
  //     }
  //   })
  // }

  handleTaskDescriptionChange = ((e) =>{
    const clonedTask = { ...this.state.task }
    clonedTask.description = e.target.value
    this.setState({
      task: clonedTask
    })
  })

  handleTaskStatusChange = ((e) => {
    console.log(e);
    const clonedTask = { ...this.state.task }
    clonedTask.status = e.target.value
    this.setState({
      task: clonedTask
    })
  })

  handleSubmit = ( (e) => {
    e.preventDefault()
    this.props.modify(this.state.task, this.props.index)
  })






  render() {
    console.log(this.state);
    return (
      <div style={{border: '2px red solid'}}>
      
        <p>{this.state.task.description}</p>
        <p>{this.state.task.status}</p>  
        <button className="border-solid border-2 border-red-600 ..." onClick={""}>Modify</button>
        <form action="" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.task.description} onChange={this.handleTaskDescriptionChange}/>
            <select name="" id="" onChange={this.handleTaskStatusChange}>
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button className="border-solid border-2 border-indigo-600" type='submit'>Edit</button>
        </form>
        <button className="border-solid border-2 border-indigo-600 ..." onClick={this.props.delete}>delete Me</button>
      
      </div>
    )
  }
}

export default Task