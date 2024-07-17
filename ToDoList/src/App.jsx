import { useState } from 'react'
import {useTodo, todoProvider, todoContext} from './Context/TodoContext'
import './App.css'

function App() {
  const [todoArray, setTodoArray] = useState([])

  const addTodo = (todoText) =>{
    // Here we need to add it in the array

    // agar hum isee setTodoArray(todobj) me add kr denge
    // to ye add toh ho jayega but remember that it is not a single value
    // ye ek array hai, so add accordingly

    setTodoArray((todoList) => [...todoList, {id: Date.now(), todoText: todoText, completed: false}])
  }

  const deleteTodo = (id) => {
    setTodoArray((todoList) => todoList.filter( (todoObj) => todoObj.id !== id))
  }

  const toggleTodo = (id) => {
    setTodoArray( (todoList) => todoList.map( (todoObj) => todoObj.id === id ? todoObj.completed = !todoObj.completed : todoObj))
  }

  const updateTodo = (todoText) => {
    setTodoArray( (todoList) => todoList.map( (todoObj) => todoObj.id === id ? todoObj.todoText = todoText : todoObj))
  }

  return (
    <todoProvider values={{todoArray, updateTodo, addTodo, deleteTodo, toggleTodo}}>
      <h1>Chai aur Harminder</h1>
    </todoProvider>
  )
}

export default App
