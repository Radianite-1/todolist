import React, { Component } from 'react';
import TodosList from './TodosList.js';
import AddForm from './AddForm.js'


class App extends Component  {
  state = {
    todos: [
      {id: 1, content: 'Go to the Bank.'},
      {id: 2, content: 'Pick up Amazon parcel from locker.'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });

    this.setState({
      todos
    })

  }

  addTodo = (todo) => {
   todo.id = Math.random();
   let todos = [...this.state.todos, todo]
   this.setState({
     todos: todos
   })
  }

  render() {
  return (
    <div className="todo-app container">
         <h1 className="center black-text">Todo List</h1>
         <TodosList todos={this.state.todos} deleteTodo={this.deleteTodo} />
         <AddForm addTodo={this.addTodo} />
    </div>
  );
  }
}


export default App;
