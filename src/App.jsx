import { useState } from 'react'
import './App.css'
import Todo from './components/Todos'
import Addtodo from './components/Addtodo'
function App() {

  return (
    <>
      <h1>Redux toolkit</h1>
      <Todo/>
      <Addtodo/>
    </>
  )
}

export default App
