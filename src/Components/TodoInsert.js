import React from 'react';
import "./TodoInsert.scss";
import {MdAdd} from "react-icons/md"

const TodoInsert = ({handleChange,handleSubmit,todoText}) => {
  
  return (
    <form className="TodoInsert" onSubmit={handleSubmit} >
      <input placeholder="write your to do" value={todoText} onChange={handleChange}/>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;