import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { getTodos } from './utils';
import TodoList from './components/TodoList';

import './Todos.scss';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    getTodos()
      .then((data) => setTodos(data))
  }, [])

  function handleAddTodo(e) {
    e.preventDefault();
    newTodo &&
      setTodos([...todos, {
        userId: 1,
        id: uuid(),
        title: newTodo,
        completed: false,
      }]);
    setNewTodo('');
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }
  
  function changeTodo(id, newValue) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title: newValue,
        }
      }
      return item;
    });
    setTodos(newTodos);
  }

  return (
    <main>
      <div className="container">
        <span className="container__title">To-Dos</span>
        <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Add To-Do"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    </main>
  );
}

export default Todos;
