import React,{useState,useRef,useCallback} from 'react';
import TodoInsert from '../Components/TodoInsert';
import TodoList from '../Components/TodoList';
import TodoTemplate from '../Components/TodoTemplate';

function bulkTodos() {
  const arr = [];
  for(let i = 0 ; i <= 2500; i++) {
    arr.push({
      id: i,
      text : `할 일 ${i}`,
      checked:false
    });
  }
  return arr
}

const App = () => {
  const [todos, setTodos] = useState(bulkTodos)
  const newId = useRef(todos.length);
  const [todoText, setTodoText] = useState("")

  const handleChange = e => {
    setTodoText(e.target.value)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
      const prev = {
        id: newId.current,
        text: todoText,
        checked: false
      }
      const result = todos.concat(prev)
      
      setTodos(result)
      newId.current ++
      setTodoText("")
  },[])

    const handleRemove = useCallback((id) => {
      setTodos(todos.filter((item) => item.id !== id))
    },[])

    const handleToggle = useCallback((id) => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked:!todo.checked} : todo )
      )
    },[todos])

  console.log("todos",todos)
  console.log("todosLength",todos.length)

  return(
    <TodoTemplate>
      <TodoInsert handleChange={handleChange} handleSubmit={handleSubmit} todoText={todoText}/>
      <TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle}/>
    </TodoTemplate>
  )
};

export default App;

