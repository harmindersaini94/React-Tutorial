import React, {useState, useContext} from "react";
import userContext from "../Context/UserContext";

export default function Profile(){
    const {value} = useContext(userContext) // remember the userContext component, where the context provider exposes this for global use

    if (value) {
        return (
            <>
                            <h1>Profile Information</h1>
                            <h2>{value.username}</h2>
            </>
        )
    }
    else{
        return (
            <>
                            <h1>Profile Information</h1>
                            <h2>Please Login</h2>
            </>
        )
    }
}