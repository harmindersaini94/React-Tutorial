import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const obj1={
    img:"./src/Images/img111.jpeg",
    desc: "Description 1",
    name: "Harminder",
    designation: "Programmr"
  }
  const obj2={
    img:"./src/Images/img112.jpeg",
    desc: "Description 2",
    name: "Tont Stark",
    designation: "AI"
  }
  const obj3={
    img:"./src/Images/img113.jpeg",
    desc: "Description 3",
    name: "Batman",
    designation: "ML"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4'>Tailwind Test</h1>
      <Card cardName={obj1}/>
      <Card cardName={obj2}/>
      <Card cardName={obj3}/>
     </>
  )
}

export default App
