import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";
import './TodoListItem.scss'
import cn from 'classnames'

const TodoListItem = ({todo,handleRemove,handleToggle}) => {
  const {id, text, checked} = todo

  
  console.log("todododo",todo)
  return (
    <div className="TodoListItem">
        <div className={cn('checkBox', {checked})} onClick={() => handleToggle(id)}>
         {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => handleRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
    </div>
  );
};

export default React.memo(TodoListItem);