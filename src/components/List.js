import React, { Component } from 'react'
import Task from "./Task"

class List extends Component {
 
  render() {
    // console.log("list Tasks",this.props)
    
    return (
      <>
        {this.props.tasks.map( (task, index) => {
          return(
          <>
            <Task
                key= {`${index}${task.description}`}
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