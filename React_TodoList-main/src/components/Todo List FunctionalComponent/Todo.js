import React from 'react'
import { ImCheckmark } from "react-icons/im";
import { ImCancelCircle } from "react-icons/im";
const Todo = ({ todo, deletTodo, changeStatus }) => {
  return (
    <div  className='d-f todo-count'>
      <div 
      style={{textDecoration: todo.status?'line-through': ''}}
      // className={`${todo.status && 'line-through'}`} 
      onClick={() => changeStatus(todo.id)}>
      {todo.name}
      </div>
      <button
        className='delete-btn'>
        {todo.status ? <ImCheckmark style={{
          color: 'yellow',
          fontSize: "25px"
        }} /> : <ImCancelCircle onClick={() => deletTodo(todo.id)} style={{
          color: 'red',
          fontSize: "25px"
        }} />}</button>
    </div>
  )
}

export default Todo