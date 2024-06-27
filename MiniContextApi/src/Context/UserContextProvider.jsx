import React, { useState } from "react";
import userContext from "./UserContext";


const UserContextProvider = ({children}) =>{
    // Now this is where you can all any api or db or whatever to get the data
    // can use usestate to set the data and then this can be passed to the value below, 
    const [value, setValue] = useState(null)
    return(
        <userContext.Provider value={{value, setValue}}>
            {children}
        </userContext.Provider>
    )

}

export default UserContextProvider