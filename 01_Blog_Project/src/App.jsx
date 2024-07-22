import {envObj} from './Config/Config'
import './App.css'
import { useEffect, useState } from 'react'
import objAppWrite from './Appwrite/Auth'
import {login, logout} from './ReduxToolkit/BlogSlice'
import {useDispatch} from 'react-redux'
import {Footer, Header} from './Components/index'
import {Outlet} from 'react-router-dom'

function App() {

  // console.log(import.meta.env.VITE_TEST_VARIABLE)
  // console.log(import.meta.env.VITE_TEST_VARIABLE_2)
  // console.log(import.meta.env.TEST_VARIABLE_2)

  // console.log(`Appwite URL: ${envObj.ENDPOINT}`)
  // console.log(`Project ID: ${envObj.PROJECT_ID}`)
  // console.log(`Database ID: ${envObj.DATABASE_ID}`)
  // console.log(`Collection ID: ${envObj.COLLECTION_ID}`)
  // console.log(`Bucket ID: ${envObj.BUCKET_ID}`)

  // Ye hum isliye lenge coz humari jo app hai vo load hone pr data le kr aayegi DB se so that is why we need to put a state to track it
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  /*
  1. Yha hum check krenge ki user login hai ki nhi, kaise, we will call the appwrite getUser to get data
  2. If we recieve, we will dispach the data to the login reducer of our store
  3. if not then we will dispatch logout to our store
  */

  useEffect(() => {
    objAppWrite.isLoggedIn()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => (setLoading(false)))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
