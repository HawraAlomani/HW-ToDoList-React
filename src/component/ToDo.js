import React, { Component } from "react";
import TasksList from "./TaskList";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }
  addTask(e) {
    if (this._inputElement !== "") {
      let newTask = {
        task: this._inputElement.value,
      };
      this.setState((pre) => {
        return { tasks: pre.tasks.concat(newTask) };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.tasks);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>My To Do List</h1>
        <div className="Sticker">
          <form onSubmit={this.addTask}>
            <input
              ref={(a) => (this._inputElement = a)}
              type="text"
              className="userInput"
              placeholder="Write your task . . "
            />
            <button type="submit" className="button-52">
              {" "}
              Add Task{" "}
            </button>
          </form>
          <div className="scrollable">
            <TasksList inputs={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}
export default ToDo;
