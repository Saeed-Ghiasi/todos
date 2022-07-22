import React, { useState } from 'react';

import CustomButton from '../../../../shared-components/CustomButton';

import './TodoItem.scss';

function TodoItem({ todo, removeTodo, changeTodo }) {
  const [completed, setCompleted] = useState(todo.completed);
  const [onEdit, setEdit] = useState(false);
  const [newValue, setNewValue] = useState(todo.title);

  function handleRemove() {
    removeTodo(todo.id);
  }

  function handleEdit() {
    setEdit(true);
  }

  function handleSaveChange() {
    changeTodo(todo.id, newValue);
    setEdit(false);
  }

  return (
    <>
      <li className="todo__item">
        <div className="todo__check">
          {
            onEdit
            ? (
              <input type="text" style={{width: '100%'}} value={newValue} onChange={(e) => setNewValue(e.target.value)} />
            )
            : (
              <>
              <input id={todo.id} className="todo__checkbox" type="checkbox" checked={completed} onChange={() => setCompleted(() => !completed)} />
              <label htmlFor={todo.id} className={`todo__label${completed ? '--completed' : ''}`}>{todo.title}</label>
              </>
            )
          }
          </div>
        <div className="todo__buttons">
          <CustomButton className="secondary" onClick={handleRemove} value="REMOVE" disabled={onEdit} />
          {
            onEdit
            ? <CustomButton className="submit" onClick={handleSaveChange} value="SAVE" />
            : <CustomButton className="primary" onClick={handleEdit} value="EDIT" />
          }
        </div>
      </li>
      <hr />
    </>
  )
}

export default TodoItem;
