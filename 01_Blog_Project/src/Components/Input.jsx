import React, { forwardRef, useId } from 'react'

// const Input = forwardRef( (
//     label,
//     type = 'text',
//     className = "",
//     ...props
// ) => {
// }, ref) => {

// })

const Input = forwardRef( ({
    label,
    type = 'text',
    className = "",
    ...props
}, ref) => {

    const idNew = useId()
    return (
        <div className='w-full'>
            {label && (
                <label
                className="inline-block mb-1 px-2"
                htmlFor={idNew}
                >{label}</label>

            )}
            <input
             type={type}
             className={` px-3 py-2 rounded-lg bg-white
                text-black outline focus:bg-gray-50
                duration-100 border border-gray-100 w-full ${className}`}
                ref={ref}
                {...props}
                id={idNew}
            ></input>
        </div>
    )
})

export default Input