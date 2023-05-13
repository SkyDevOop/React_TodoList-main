import { React, useState } from 'react'

const TodoForm = ({addtodosHandler}) => {
  const [text, setText] = useState('');
  const addTodoTo = (e) => { 
    e.preventDefault() 
    if (text.length >0) {
      addtodosHandler({
        id: new Date(),
        name: text, 
        status : false
      })
      setText('')
    }
   }
  return (
    <form onSubmit={addTodoTo}>
      <input onChange={(e) => setText(e.target.value)} className='input-field' type="text" placeholder='add Todo' value={text}/>
      <button className='btn all-btn'>Add Note</button>
    </form>
  )
}

export default TodoForm