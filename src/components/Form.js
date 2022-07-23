import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      task: ""
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
        <form action="" onSubmit={this.handleSubmit} className="mb-5 w-full text-center">
            <input type="text" onChange={this.handleTaskDescriptionChange} value={this.state.task} className="w-3/12 font-medium bg-white border border-slate-300 rounded-lg py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-base mr-5"/>
            <button className="rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none py-2 pl-3 pr-3 text-white" type='submit'>Submit</button>
        </form>
      
      </>
    )
  }
}

export default Form
