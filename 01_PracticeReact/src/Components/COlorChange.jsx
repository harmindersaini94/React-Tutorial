import React, { useState } from 'react'

function COlorChange() {

    const [color, setColor] = useState("white")

    ReactDom.querySelector('.parent').addEventListener('click', (e) =>{
        setColor(e.target.id)
        ReactDom.querySelector('body').style.backgroundColor = `${color}`
    })
  return (
    <ul className="parent">
        <li id="red">Red</li>
        <li id="green">Green</li>
        <li id="blue">Blue</li>
        <li id="orange">Orange</li>
        <li id="purple">Purple</li>
        <li id="yellow">Yellow</li>
        <li id="white">White</li>
        <li id="black">black</li>
    </ul>
  )
}

export default COlorChange