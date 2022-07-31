import React,{useState, useCallback} from 'react';
import "./TodoInsert.scss";
import {MdAdd} from "react-icons/md"

const TodoInsert = ({ todos, setTodos, newId, setNewId }) => {
  const [text, setText] = useState({
    id: "",
    text : "",
    checked: false
  })

  const handleChange = useCallback((e) => {
    const prev = {
      ...text,
      id : newId,
      text: e.target.value,
      checked: false
    }
    setText(prev)
  },[todos])

  const handleClick = (e) => {
    e.preventDefault()
    const arr = todos.concat(text)
    setTodos(arr)
    setNewId(newId + 1)
    const prev = {
      ...text,
      text : "",
    }
    setText(prev)
  }
  return (
    <form className="TodoInsert">
      <input placeholder="write your to do" value={text.text} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;