import { Component } from "react";
import Swal from "sweetalert2";
import check from "./check.png";

export class List extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      todoList: [],
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  handleInputChange(e) {
    this.setState({ userInput: e });
    console.log(this.state.userInput);
  }

  handleButtonAdd() {
    if (this.state.userInput === "") {
      this.setState({ userInput: "" });
      Swal.fire({
        title: "Error!",
        text: "Please enter something",
        icon: "error",
        confirmButtonText: "Cool",
      });
    } else {
      let list = this.state.todoList;
      list.push(this.state.userInput);
      this.setState({ userInput: "", todoList: list });
    }
  }
  handleButtonDelete() {
    this.setState({ todoList: [] });
  }
  handleItemCrossed(e) {
    let word = e.target;
    word.classList.toggle("crossed");
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input">
            <input
              className="inputField"
              type="text"
              placeholder="What's your plan for today?"
              value={this.state.userInput}
              onChange={(e) => this.handleInputChange(e.target.value)}
            />
            <button className="btn" onClick={() => this.handleButtonAdd()}>
              Add
            </button>
            <ul>
              {this.state.todoList.map((el, index) => (
                <li key={index} onClick={this.handleItemCrossed}>
                  <img src={check} alt="check" /> {el}
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-delete">
            <button className="btn" onClick={() => this.handleButtonDelete()}>
              Remove All
            </button>
          </div>
        </form>
      </>
    );
  }
}
