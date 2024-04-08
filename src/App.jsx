import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './app/components/AddTodo'
import Todos from './app/components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Add todo here (used redux toolkit)</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
