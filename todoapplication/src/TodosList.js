import React from 'react';

const TodosList = ({todos, deleteTodo}) => {
  const todo = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
        <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no Todos left.</p>
  )

  return (
    <div className="todos collection">
      {todo}

    </div>
  )

}

export default TodosList
