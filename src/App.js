import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const startingList= [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  }];



class App extends React.Component {
  
  constructor () {
    super();
    this.state = {
      list: startingList
    };
  }
  
addTodo = (e, todo) => {
  e.preventDefault();

  const newTodo = {
    task: todo,
    id: Date.now(),
    completed: false
  };

  this.setState({
    list: [...this.state.list, newTodo]
  });
};
 
toggleTodo = todoId => {
  console.log(todoId);

  this.setState({
    list: this.state.list.map(todo => {

      if (todoId === todo.id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      // if the item does NOT match the id that was clicked
      // just return the item, unchanged
      return todo;
    })
  });
};

clearCompleted = e => {
  e.preventDefault();

  this.setState({
    list: this.state.list.filter(todo => !todo.Completed)
  });
};
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />

        <TodoList
         list={this.state.list}
         toggleTodo={this.toggleTodo}
         clearCompleted={this.clearCompleted}
    />
      </div>
      
    );
  }
}

export default App;
