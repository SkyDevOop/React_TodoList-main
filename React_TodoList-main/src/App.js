import { React, useState } from "react";
import "./components/Todo List FunctionalComponent/TodoStyle.css";
import TodoForm from "./components/Todo List FunctionalComponent/TodoForm";
import Todo from "./components/Todo List FunctionalComponent/Todo";

const App = () => {
  let [todos, setTodos] = useState([]);
  const [showTodo, setShowTodo] = useState('all');
  const addtodosHandler = (todo) => {
    setTodos([...todos, todo]);

  };
  // delete Todo
  const deletTodo = (todoId) => {
    const updateTodo = todos.filter((ele) => ele.id !== todoId);
    setTodos(updateTodo);
  };
  //  change Stauts
  const changeStatus = (todoId) => {setTodos
    (
    todos.map((todo) => {
      if (todo.id === todoId) {
        return{
          ...todo,
          status : !todo.status
        }
      }else{
        return todo
      }
    } )
   )
  };
  // update show
  const updateShow = (fil) => {
    setShowTodo(fil)
  }
  if (showTodo === 'active') {
    todos = todos.filter(todo => !todo.status)
    console.log(todos);
  } else if (showTodo === 'finish') {
    todos = todos.filter(todo => todo.status)
    console.log(todos);
  }

  // Remove all task
  const removeAll = (e) => { 
    e.preventDefault() 
    setTodos([])
   }
  return (
    <div className="container">
      <TodoForm addtodosHandler={addtodosHandler} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deletTodo={() => deletTodo(todo.id)}
          changeStatus={changeStatus}
        />
      ))}
      <div className='todo-count'>
        <button className='btn update-btn' onClick={() => updateShow('all')}>all</button>
        <button className='btn update-btn' onClick={() => updateShow('active')}>active</button>
        <button className='btn update-btn' onClick={() => updateShow('finish')}>finish</button>
      </div>
      <div>
        <button onClick={removeAll} className='btn all-btn'>Remove All complete todos</button>
        <button onClick={removeAll} className='btn all-btn'>Toggle All complete : </button>
      </div>
    </div>
  );
};

export default App;
