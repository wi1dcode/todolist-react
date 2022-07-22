import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <>
        <form action="" onSubmit={this.props.submitTask}>
            <input type="text" onChange={this.props.changeInput} value={this.props.inputText}/>
            <button type='submit'>Submit</button>
        </form>
      
      </>
    )
  }
}

export default Form
