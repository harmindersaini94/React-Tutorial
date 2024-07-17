import {useContext, createContext} from 'react'

// Create a context and export it
// Pass the initial values in the context for todo
/*
Now we kow that todo will have a list of todo, so we need to pass it an array
also, we need to add a todo, so one function each for
ass todo
update todo
delete todo
toggle todo to mark that it is complete
*/
 export const todoContext = createContext({
    todoArray:[{
        id:Date.now(),
        todoText:"HEllo",
        completed: false
    }],

    addTodo : (todoObj) => {},
    updateTodo : (id, todoText) => {},
    deleteTodo : (id) => {},
    toggleTodo : (id) => {}
});

export const todoProvider = todoContext.Provider

export function useTodo(){
    return useContext(todoContext)
}