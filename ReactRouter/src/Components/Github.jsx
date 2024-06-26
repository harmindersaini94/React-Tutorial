import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Github(){

// Yha humne loader ko use kiya hai, this is because ye useEffect se bhi jaada optimized hai
// jaise humara github pr api call hai, toh ye kya krta hai ki use even before cliking on the github link, jab bhi humara mouse vha pr jata hai
// ye already api call kr k use cache me rakh leta hai, usse humara response bohot optimize ho jaata hai

    // const [data, setData] = useState(0)
    // const {followers} = useParams()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/harmindersaini94')
    //     .then((res) => res.json())
    //     .then((res) => setData(res) )
    // },[])
    const data = useLoaderData()
    return(
        <>
            <h1 className="text-center m-4 text-white p-4 text-3xl bg-gray-600">Github Followers: {data.followers}</h1>
            <img src={data.avatar_url}></img>
        </>
    )
}

export const urlData = async () =>  {
    const res = await fetch('https://api.github.com/users/harmindersaini94')
    return res.json()
}