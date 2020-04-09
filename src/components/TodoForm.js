import React from 'react';


class TodoForm extends React.Component {
    constructor () {
      super();
      this.state = {
        todoItem: ''
      };
    }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
      console.log(this.state.todoItem);
    };

    submitTodo = e => {
        e.preventDefault();
    
        this.setState({ todoItem: "" });
        this.props.addTodo(e, this.state.todoItem);
      }
    
    render() {
        console.log("TodoForm Props:", this.props);
      return (
        <form onSubmit={this.submitTodo}>
        <input
          type="text"
          name="todoItem"
          value={this.state.todoItem}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
      );  
    }
}

export default TodoForm;