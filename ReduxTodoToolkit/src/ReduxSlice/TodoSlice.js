import {createSlice, nanoid} from '@reduxjs/toolkit'

// Step 2 
// Create a slicce

// Create a Initial State object here
const myInitialState = {
    todoArray : [
        {
            id: nanoid(),
            todoText: "Hi Harminder"
        }
    ],

    updateObjId: 0
}
const slice = createSlice({
    name: 'TodoSlice',
    initialState: myInitialState,

    reducers: {
        addTodo: (state, action) => {

            console.log(action.payload)
            const todoObj = {
                id: nanoid(),
                todoText: action.payload
            }

            // Add it in the TodoArray using state
            // Coz state here preserve the current state of TodoArray
            console.log("During Dispatch")
            console.log(todoObj)
            state.todoArray.push(todoObj)
        }, 

        updateTodo : (state, action) => {

            console.log("Update", action.payload)

            // Loop thru the todo aray to find the todo wiht given id and change the text
            state.todoArray = state.todoArray.map((todo) => {
                if(todo.id === action.payload.id){
                 todo.todoText = action.payload.text   
                }

                return todo
              })
        },

        deleteTodo: (state, action) => {
            state.todoArray = state.todoArray.filter( (todo) => ( todo.id !== action.payload))
        },

        stateData : (state, action) => {
            state.updateObjId = action.payload
        }
    }
})

// Exporting for Individual Component
export const {addTodo, updateTodo, deleteTodo, stateData}  = slice.actions

// Exporting for registering in th store
export default slice.reducer