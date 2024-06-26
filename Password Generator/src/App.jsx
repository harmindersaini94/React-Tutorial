import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")
  const passRef = useRef(null) // ab isko vha pass kro jiska reference chahiye hume

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbers) str+= "0123456789"
    if(characters) str+= "!@#$%^&*()_"

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1) //Math.random will generate a random num < 1, it is multiplied with the length of the str to get a decimal num and we take floor of it
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numbers, characters, setPassword]) // ye jo yha parameters pass kiye hai, ye trigger krenge is methid ko hmesha
  // yha humne setPassword ko is liye diya coz useCallback dekhta hai ki kis me change hua for memoization, so its beete, agar remove kr denge hum toh bhi chlega
  // but yha agar humne password de diya, toh vo infinite loop chal jayega

  // passwordGenerator() 
  /*
  So this wont work here coz it will say too many re-renders, even if we remove the useCallback, still the error is same, this is because we are trying to
  make changes in the UI and with react we dont have any control over this, we can just call this in the component and expect to work correctly
  Yes one thing we can make it happen is to call it on click of button that way it will work but then we have to put all the references to make it work
  Another way is to make use of another hook called UseEffect, that controls the callback
  */

  useEffect(() => {
    passwordGenerator()
  },[length, numbers, characters, passwordGenerator]) // ye jo yha parameters pass kiye hai, ye trigger krenge is methid ko hmesha


  /*
  So 2 things here, useCallback, takes all the dependency and memoize them or keep them in cache, based on the fact that this method may run
  but useEffect is actually that hook, which then look at the provided dependency values in cache to see if it needs to be run or not.
  So useCallback is used for optimization and useEffect for actually running the method

  Also, here witout useCallback bhi hum chala skte hai ye functinality , useCAllbaakc bas optimization k liye hi use krte hai
  */

  const CopyThePassword = useCallback(() => {
    // copy the password to clipboard
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,11)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 mb-8'>
    <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-8'>
      <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}></input> 
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={CopyThePassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range' min={6} max={180} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}></input>
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
        {/* it means that jo prev value hai vo lo aur usko ulta krdo */}
          <input type='checkbox' defaultChecked={numbers} id='numberInput' onChange={() => {setNumbers((prev) => !prev)}}></input>   
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type='checkbox' defaultChecked={characters} id='charInput' onChange={() => {setCharacters((prev) => !prev)}}></input>
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
