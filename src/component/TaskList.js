import React, { Component } from 'react'

export default class TaskList extends Component {
    taskListElement(props){
        return <li>{props.task}</li>
    }
  render() {
    let todoInput = this.props.inputs;
    let listTasks = todoInput.map(this.taskListElement)
    return (
      <div>
          <ul>
              {listTasks}
          </ul>

      </div>
    )
  }
}
