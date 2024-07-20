import { useState, useContext } from "react";
import { useTodo, TodoContext } from "../Context/TodoContext";

function TodoForm() {
    // Make use of useContext to get access to all the functions
    const {addTodo} = useTodo() || {};

    // Make a useState hook to track the change of text in the TodoText field
    const [todoText, setTodoText] = useState("")

    function getUpdatedText(val){
        setTodoText(val)
        // console.log("OnChange Working Fine", val)
        // console.log("Todo Text", todoText)
    }
    /*
    Here another learning
    Jo click event hai ya broser event hai, vo be default event ko as a parameter denge hi
    i.e just like here addInTodoArr, hum isse just as a reference pass kiya nice 
    but up here hume automatically event ka access mil gya
    */
    function addInTodoArr(e){
        e.preventDefault()
        if (!todoText) return

        addTodo(todoText)
        console.log("Submit Working Fine", todoText)

        // No empty the input field
         setTodoText("")
    }

    return (
        <form onSubmit={addInTodoArr} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                value={todoText}
                onChange={(e) => getUpdatedText(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" 
            className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

