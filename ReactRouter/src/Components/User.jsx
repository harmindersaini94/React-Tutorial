import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
    return(
        <>
            <h1 className="text-3xl bg-green-300">User: {userid}</h1>
        </>
    )
}