import React, {useState, useContext} from "react";
import userContext from "../Context/UserContext";

export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // now hume value yha se pass krvani hai to the global context, so for that we will make use of a hook called useContext, that take userContext provier as a input

    const {setValue} = useContext(userContext) // remember the userContext component, where the context provider exposes this for global use

    const HandleSubmit = (e) => {
        e.preventDefault()
        setValue({username})
    }

    return(
        <>
        <div>
            <h1>Login Information</h1>
            <br></br>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"/> {"   "}
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <br />
            <button onClick={HandleSubmit}>Login</button>
        </div>

        </>
    )
}
