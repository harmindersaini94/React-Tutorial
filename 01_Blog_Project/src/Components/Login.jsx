import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../ReduxToolkit/BlogSlice'
import {Logo, Button, Input} from './index'
import { useDispatch } from 'react-redux'
import objAppWrite from '../Appwrite/Auth'
import {useForm} from 'react-hook-form'  // <-- This we will always import while working with forms


export function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {register, handleSubmit} = useForm()  // <-- handleSubmit useForm ka event hai jo ki kam krega form submit hone pr, pr kya kaam krega vo hum define krege by passing our fn in it
    const [error, setError] = useState("")

    // Here we will make a login method to log the user

    const login = async (data) =>{  // <-- Why async because login kr rhe hai, so request server pr jayegi and response aayega so async task hai ye
        try {
            setError("")  // Clearing all the errors if any
            const session = await objAppWrite.LoginAccount(data) // Login will always return us the data
            if(session){
                // If we get a session then wwe get the user data
                const userData = await objAppWrite.getCurrentUser()
                if(userData){
                    dispatch(authLogin(userData))
                    console.log("Data After Login ", userData)
                    navigate("/") // Here navigate programatically dusre page par bhej dta hai, Link click krne pr bheta
                }
            }
        } catch (error) {
            setError(error.message)
        }
    }


  return (
    <div className="flex items-center justify-center">
       <div className={`mx-auto w-full max-w-lg bg-gray-50 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width='100%'></Logo>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-right">Sign in to your account</h2>
            <p className="mx-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/signup"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign Up
                        </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form onSubmit={handleSubmit(login)} className='mt-8'>
                <div className='space-y-5'>
                    <Input 
                    label="Email: "
                    placeholder="Enter your Email Here"
                    type="email"

                    // Yha {...register("email")} aise hi likhna hai coz ye is tarah se form ki value form se associate ho rha
                    // agar without spread operator k likhege toh ye overwrite kr dega values
                    {...register("email" , {
                        required: true,
                        validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }
                    })}
                    />
                    <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                    />
                    
                    <Button
                    type="submit"
                    className="w-full"
                    >Sign in</Button>
                </div>
            </form>
        </div>
    </div>
  )
}


