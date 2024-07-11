import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import{addtodo} from '../features/todo/todoSlice'

function Addtodo() {

    const [Input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodoHandle=(e)=>{
        e.preventDefault()
        if(Input){
        dispatch(addtodo(Input))
        setInput('')
        }
    }
  return (
       <div className="addtodo-container">
      <form className="addtodo-form" onSubmit={addTodoHandle}>
        <input
          type="text"
          name="todo"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          className="addtodo-input"
          placeholder="Add a new todo"
        />
        <button type="submit" className="addtodo-submit">
          Add
        </button>
      </form>
    </div>
  )
}

export default Addtodo