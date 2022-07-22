import React, { Component } from 'react'

 class Task extends Component {
  render() {
    return (
      <>
        <p>{this.props.tasks.description}</p>
        <p>{this.props.status}</p>
        <button className="border-solid border-2 border-red-600 ..." onClick={}>Modify</button>
        <form action="" onSubmit={}>
            <input type="text" value={this.props.tasks.description}/>
            <button className="border-solid border-2 border-indigo-600" type='submit'>Edit</button>
        </form>
        <button className="border-solid border-2 border-indigo-600 ..." onClick={}>delete Me</button>
      
      </>
    )
  }
}

export default Task