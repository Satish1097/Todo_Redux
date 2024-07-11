import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removetodo } from '../features/todo/todoSlice'
function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <>
        <div className='todos-container'>
            {todos.map((e) => (
                <li key={e.id} className='todo-item'>
                    {e.text}
                    <button className='remove-button' onClick={() => dispatch(removetodo(e.id))}>X</button>
                </li>
            ))}
            </div>

        </>
    )
}

export default Todos