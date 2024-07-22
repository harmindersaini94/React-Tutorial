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
    return (
        <div className='w-full'>
            {label && (
                <label
                className="inline-block mb-1 pl-1"
                htmlFor={useId()}
                >{label}</label>

            )}
            <input
             type={type}
             className={` px-3 py-2 rounded-lg bg-white
                text-black outline-non focus:bg-gray-50
                duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={useId}
            ></input>
        </div>
    )
})

export default Input