import { useState } from 'react'

//Version 1
// let counter = 15

// function IncreaseCount(){
//   console.log(counter)
//   counter = counter + 1
// }
// function DecreaseCount(){
//   console.log(counter)
//   counter = counter - 1
// }

// function App() {
//   return (
//     <>
//       <h1>Hi Harminder {counter}</h1>

//       <button onClick={IncreaseCount}>Increase Counter {counter}</button>
//       <br></br>
//       <button onClick={DecreaseCount}>Decrease Counter {counter}</button>
//     </>
//   )
// }


// Version 2



function App() {
  let [counter, setCounter] = useState(11)

  function IncreaseCount(){
    console.log(counter)
   
    //Method 1
    // if(counter <= 19){
    //   counter = counter + 1
    //   setCounter(counter)
    // }

   setCounter( (counter) => {
    if(counter <= 19){
      return counter = counter + 1
    }
    else return 20

   })


  
    
  }
  function DecreaseCount(){
    console.log(counter)
   
  // if (counter >0){
  //   counter = counter - 1
  //   setCounter(counter)
  // }

  setCounter( (counter) => {
    if(counter > 0){
      return counter = counter -1
    }
    else{
      return 0
    }
  })
      
  }

  return (
    <>
      <h1>Hi Harminder {counter}</h1>

      <button onClick={IncreaseCount}>Increase Counter {counter}</button>
      <br></br>
      <button onClick={DecreaseCount}>Decrease Counter {counter}</button>
    </>
  )
}

export default App

/*
Why we need to have Version 2, if Version 1 is there

SO look in version1, since we have counter defined at multiple places inside the HTML tag, so we know that changing value by button click will
lead to change in UI. Thus can be done using simple JS by having getElementByID at many places where we need to change the text and it will work

This is where Version 2 will come up, here React make use of the useState hook to make interaction with UI and propogte the change from JS to UI
easily with 2 lines of code.

So each time we need to interact/change value of some UI elemnt  useState will come in handy


One thing to note here setCounter always return value

i.e setCounter(counter) means setCounter(return counter)

that is why when we are writing 

  setCounter( (counter) => {
    if(counter > 0){
       counter = counter -1
    }
    else{
      counter = 0
    }
  })

  we were getting undefined, coz here we are writing a custom function, so we must return a value here
  so the correct one should be

    setCounter( (counter) => {
    if(counter > 0){
       return counter = counter -1
    }
    else{
      return counter = 0
    }
  })

*/
