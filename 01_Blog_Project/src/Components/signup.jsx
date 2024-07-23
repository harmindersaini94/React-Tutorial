import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin, login} from '../ReduxToolkit/BlogSlice'
import {Logo, Button, Input} from './index'
import { useDispatch } from 'react-redux'
import objAppWrite from '../Appwrite/Auth'
import {useForm} from 'react-hook-form'  // <-- This we will always import while working with forms

export function Signup() {
    const navigate = useNavigate()
    const dispatch = useDispatch

    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    // VVVVVV IMP COncept
    
    // SO yaha par hum ises data as a parameter pass kr rhe hai, but niche hum isse pass hi nhi lr rhe, toh ye data asie hi nhi milega isse like magic
    // Yha handleSubmit ka saath wala event register kamm kr rha, vo data pass kr rha
    // How? Remember, we are using {...register("eachfield")} this is how it is keeping tract of the data field and that create a wrapper and pass the data here
    const create = async(data) => {
        setError("")
        try {
            const userData = await objAppWrite.createAccount(data)
            if(userData){
                const data = await objAppWrite.getCurrentUser()
                if(data)
                    dispatch(authLogin(data))
                navigate("/") // slash(/) means home page
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="flex items-center justify-center">
                <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Already have an account?&nbsp;
                        <Link
                            to="/login"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    
                    <form onSubmit={handleSubmit(create)}>
                        <div className='space-y-5'>
                            <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                            />
                            <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true
                                // ,validate: {
                                //     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                //     "Email address must be a valid address",
                                // }
                            })}
                            />
                            <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,})}
                            />
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </div>
                    </form>
                </div>
    
        </div>
      )
}
