import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'
import COlorChange from './Components/COlorChange'

function App() {

  const obj1 = {
    imgSrc:"https://images.pexels.com/photos/10273454/pexels-photo-10273454.jpeg?auto=compress&cs=tinysrgb&w=600",
    empName:"Harminder",
    job:"Software Developer",
    location:"Maple Ridge"
  }

  const obj2 = {
    imgSrc:"https://images.pexels.com/photos/4067766/pexels-photo-4067766.jpeg?auto=compress&cs=tinysrgb&w=600",
    empName:"Ajay",
    job:"SAP Developer",
    location:"Kolkata"
  }

  const obj3 = {
    imgSrc:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    empName:"Parul",
    job:"Fiori Developer",
    location:"Bangalore"
  }

  const obj4 = {
    imgSrc:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
    empName:"Idrees",
    job:"S/4 Hana Developer",
    location:"Indore"
  }

  return (
    <>
      <h1><b>React Practice with Harminder</b></h1>
      {/* <Card cardDetails={obj1}/>
      <Card cardDetails={obj2}/>
      <Card cardDetails={obj3}/>
      <Card cardDetails={obj4}/> */}
      {/* <COlorChange /> */}
    </>
  )
}

export default App
