import { useEffect, useState, useContext } from 'react'
import {TodoProvider} from './Context/TodoContext'

// Good error here
// I was importing like this import {TodoForm} from './Components/TodoForm'
// It was giving error that the component is never found , why?
// COz we are importing this component as default, and default comp are called without {}
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
import './App.css'

function App() {
  const [todoArray, setTodoArray] = useState([])

  const addTodo = (todoText) =>{
    // Here we need to add it in the array

    // agar hum isee setTodoArray(todobj) me add kr denge
    // to ye add toh ho jayega but remember that it is not a single value
    // ye ek array hai, so add accordingly
    console.log("COntrol came here")
    setTodoArray((todoList) => [{id: Date.now(), todoText: todoText, completed: false}, ...todoList])
  }

  const deleteTodo = (id) => {
    setTodoArray((todoList) => todoList.filter( (todoObj) => todoObj.id !== id))
  }

  const toggleTodo = (id) => {
    setTodoArray( (todoList) => todoList.map( (todoObj) => todoObj.id === id ? todoObj.completed = !todoObj.completed : todoObj))
  }

  const updateTodo = (id, todoText) => {
    setTodoArray( (todoList) => todoList.map( (todoObj) => todoObj.id === id ? todoObj.todoText = todoText : todoObj))
  }

  useEffect(function() {
    // localStorage.setItem("lastname", "Smith");

    console.log("First Use Effect")
    // Why doing parse, coz local storage store item as array
    const todoItem = JSON.parse(localStorage.getItem("todo"));
    console.log(todoItem)
    //once we get the item, set it to the todoArray

    if(todoItem && todoItem.length > 0){
      setTodoArray(todoItem)
    }
   
    
  }, [])

  useEffect(() => {
    // Adding to the local storage
    console.log("Second Use Effect")
    console.log(todoArray)
    const todoList = JSON.stringify(todoArray)


    if(todoArray && todoArray.length > 0){
      localStorage.setItem("todo", todoList);
    }
   
  }, [todoArray])
  


  return (
    <TodoProvider values={{todoArray, addTodo, updateTodo, deleteTodo, toggleTodo}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todoArray.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
