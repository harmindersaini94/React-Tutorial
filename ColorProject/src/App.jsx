import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [color, setcolor] = useState("olive")


  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 rounded-3xl">
        <button onClick={() => setcolor("red")} className="bg-red-400 outline-none px-4 py-1 rounded-full text-black shadow-lg ">Red</button> 
        <button onClick={() => setcolor("green")} className="bg-green-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">Green</button>
        <button onClick={() => setcolor("blue")} className="bg-blue-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">Blue</button>
        <button onClick={() => setcolor("white")} className="bg-white-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">White</button>
        <button onClick={() => setcolor("yellow")} className="bg-yellow-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">Yellow</button>
        <button onClick={() => setcolor("brown")} className="bg-brown-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">Brown</button>
        <button onClick={() => setcolor("orange")} className="bg-orange-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">Orange</button>
        <button onClick={() => setcolor("purple")} className="bg-purple-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">Purpule</button>
        <button onClick={() => setcolor("pink")} className="bg-pink-400 outline-none px-4 py-1 rounded-full text-black shadow-lg">Pink</button>
      </div>
    </div>
    </>
  )
}

export default App
