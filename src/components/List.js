import React, { Component } from 'react'
import Task from "./Task"

class List extends Component {
  
  render() {
    console.log("list Tasks",this.props)
    return (
      <>
        {this.props.tasks.map( (task) => {
          return(
          <>
            <Task 
              tasks={this.props.tasks}
            
            
            />
          </>
          )
          
        })}
        
      </>
      
    )
  }
}

export default List