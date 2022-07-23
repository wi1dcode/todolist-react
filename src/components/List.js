import React, { Component } from 'react'
import Task from "./Task"

class List extends Component {
 
  render() {
    return (
      <>
        {this.props.tasks.map( (task, index) => {
          return(
          <>
            <Task
                key = {task.description}
                task = {task}
                delete = {this.props.delete} 
                modify = {this.props.modify} 
                index = {index}
                currentView = "task"
            />
          </>
          )
          
        })}
        
      </>
      
    )
  }
}

export default List