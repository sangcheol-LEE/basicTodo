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

  return(
  <TodoTemplate>
    <TodoInsert />
    <TodoList todos={todos}/>
  </TodoTemplate>
  )
};

export default App;

