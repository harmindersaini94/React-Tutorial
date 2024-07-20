import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, updateTodo} from '../ReduxSlice/TodoSlice'

function TodoAddForm() {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const todoid = useSelector(state => state.updateObjId)

    function addTodoToStore(e) {
      e.preventDefault()

        console.log("Before Dispatch")
        console.log(text)
        if(!text) return

        console.log("Event Here", e.nativeEvent.submitter.innerHTML)
        if(e.nativeEvent.submitter.innerHTML === "Add"){
          
          /*
          Here we need to add the new todo to the store
          So for that we need to send data to store means dispach
          so make create a dispatcher obj that will make use of reducer to send data to store
          Dispatcher -> Reducer -> Store
          */
          dispatch(addTodo(text))  // <--- Now this text automatically goes to the action of the addtodo?
          // Why because we are maing use of dispatch
          console.log("After Dispatch")
        }
        else{
          const obj = {
            id: todoid,
            text : text
          }
          // dispatch(addTodo(text))
          dispatch(updateTodo(obj)) 
          document.querySelector('button').innerHTML = "Add"
        }

        setText("")
    }
  return (
    <>
    <div>Add Todo</div>
    <div>
        <form onSubmit={addTodoToStore}>
        {/* We need impu field and button */}
        <input type='text'
         placeholder='Add Todo Text Here'
         value={text}
         onChange={(e) => setText(e.target.value)}
        />
        <button >Add</button>
        </form>

    </div>
    </>
  )
}

export default TodoAddForm