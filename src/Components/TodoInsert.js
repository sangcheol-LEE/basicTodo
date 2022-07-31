import React from 'react';
import "./TodoInsert.scss";
import {MdAdd} from "react-icons/md"

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="write your to do"/>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;