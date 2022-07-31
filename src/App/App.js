import React,{useState} from 'react';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';
import TodoTemplate from '../Components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: "HTML" ,checked: true},
    {id: 2, text: "CSS" ,checked: false},
    {id: 3, text: "JAVA SCRIPT" ,checked: false},
    {id: 4, text: "REACT" ,checked: false}
  ])
  const [newId, setNewId] = useState(5)

  const removeBtn = id => {
    const result = todos.filter(todo => todo.id !== id)
    setTodos(result);
  }



  console.log("todos",todos)
  return(
  <TodoTemplate>
    <TodoInsert todos={todos} setTodos={setTodos} newId={newId} setNewId={setNewId}/>
    <TodoList todos={todos} removeBtn={removeBtn} />
  </TodoTemplate>
  )
};

export default App;

