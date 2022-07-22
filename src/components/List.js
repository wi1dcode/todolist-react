import React, { Component } from 'react'

class List extends Component {
  
  render() {
    console.log("list Tasks",this.props.listTasks)
    return (
      <>
        <p>{this.props.descriptionTask}</p>
        <p>{this.props.statusTask}</p>
        <button className="border-solid border-2 border-red-600 ..." onClick={this.props.modifyTask}>Modifie</button>
        <button className="border-solid border-2 border-indigo-600 ..." onClick={this.props.deleteTask}>delete Me</button>
      </>
      
    )
  }
}

export default List