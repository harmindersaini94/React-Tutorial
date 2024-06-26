import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'
import User from './Components/User.jsx'
import Github from './Components/Github.jsx'
import Harminder from './Components/Harminder.jsx'
import {urlData} from './Components/Github.jsx'

// Method 1 to create React ROuter
// const router = createBrowserRouter([
//   {
//     path: '/', // this is the beging of the path or tree
//     element: <Layout />,  //the starting file will be from App.jsx
//     children: [    // since it has further pages, then put those in children
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

//Method 2 to create React ROuter
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}>
        <Route path='harminder' element={<Harminder />}/>  {/*This way we can further do the nesting */}
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route loader={urlData} path='github' element={<Github />}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       {/* Yha hum ye use nhi krenge cox hume React Roter use kr k site bnani hai, so yha Route provide use hoga jo ki ek prop lega jo ki hoga router jisme sab routes defined honge */}
    {/* <App /> */}

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
