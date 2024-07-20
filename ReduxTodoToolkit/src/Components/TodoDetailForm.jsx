import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteTodo, stateData} from '../ReduxSlice/TodoSlice'


function TodoDetailForm() {
    // Here we need to get all the array, is current state, for that we make use of useSelector
    const todoArray = useSelector(state => state.todoArray)
    const dispatch = useDispatch()

    function RemoveFromList(id){
        
        dispatch(deleteTodo(id))
    }

    function UpdateFromList(todo){
         dispatch(stateData(todo.id))

        // console.log("Obj ", todo)
        // console.log(todo.todoText)
        document.querySelector('input').value =  "gvfhbsjfne" //todo.todoText
        document.querySelector('button').innerHTML = "Update"
    }


  return (
    <>
    <div>Todo Detail Form</div>
    <div>
        {/* loop through the contents of the todoarray */}
        {
            todoArray.map( (todo) => (
                <li key={todo.id}>
                    {todo.todoText}

                    <button
                    onClick={(e) => UpdateFromList(todo)}
                    >Update</button>

                    <button
                    onClick={(e) => RemoveFromList(todo.id)}
                    >Delete</button>
                </li>
            ))
        }
    </div>
    </>
  )
}

export default TodoDetailForm