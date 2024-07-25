import React from 'react'
import objAppWrite from '../../Appwrite/Auth'
import {useDispatch} from 'react-redux'
import {logout} from '../../ReduxToolkit/BlogSlice'

function LogoutBtn() {
    const dispatch = useDispatch()

    /*
    Functionality: On click of logout Button, I want ki appwrite auth se logout wali functionality call ho
    and if succesfull, dispatcher se mai reducer ko use kr k store me status update krdu

    Aur ye sab kaam krna hai button click pr
    */

    const clickHandler = () => {
        objAppWrite.Logout()
        .then( () => {
            // If control comes here means logout ho gya, now update store
            dispatch(logout())
        })
    }

  return (
    <div
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full'
    onClick={clickHandler}
    >Logout</div>
  )
}

export default LogoutBtn