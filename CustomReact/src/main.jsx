import customRender from "./customReact";
import React from "react";
import ReactDom  from "react";

//Actual react synax for creating dom tree of element

const user = {
    name: 'Harminder'
}
const element = React.createElement(
    'a',
    {href: 'https://www.google.com', target: '_blank'},
    'Click on me',
    'user.name'  // so this is where the variables are injected by react, so these should be the evaluated expressions
)

ReactDom.createRoot(document.getElementById('root')).render(
    <>
    {/* <customRender />  this is correct */}
    customReact()
    </>
)

