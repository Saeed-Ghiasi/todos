import React from 'react';

import TodoItem from './TodoItem';

import './TodoList.scss';

function TodoList({ todos, removeTodo, changeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} changeTodo={changeTodo} />        
      ))}
    </ul>
  )
}

export default TodoList;
