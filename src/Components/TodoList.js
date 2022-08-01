import React from 'react';
import "./TodoList.scss"
import TodoListItem from './TodoListItem';

const TodoList = ({todos,handleRemove,handleToggle}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} handleRemove={handleRemove} handleToggle={handleToggle}/>
      ))}
    </div>
  );
};

export default TodoList;