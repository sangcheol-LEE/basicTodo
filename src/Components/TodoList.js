import React from 'react';
import "./TodoList.scss"
import TodoListItem from './TodoListItem';

const TodoList = ({todos, removeBtn,toggle}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} removeBtn={removeBtn}/>
      ))}
    </div>
  );
};

export default TodoList;