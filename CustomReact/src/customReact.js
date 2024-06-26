
const mainContainer = document.querySelector('#root');
const myElement = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: '_blank'
    },
    children: "Click to navigate to Google!!"
}

function customRender(myElement, mainContainer){
    const domEle = document.createElement(myElement.type)
    domEle.innerHTML = myElement.children
    // domEle.setAttribute('href', myElement.props.href)
    // domEle.setAttribute('target', myElement.props.target)

    for(var prop in myElement.props){  // here for in loop gives key value pair, so prop here is key and props[prop] will be the value
        domEle.setAttribute(prop, myElement.props[prop] )
    }

    mainContainer.appendChild(domEle)
}


export default customRender(myElement, mainContainer);