import React from 'react'

function Button({
    children,
    type = "button",
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button
      type={type} 
      className={` px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props} // <--- Means agar user ne koi aur bhi parameter pass kiya haithen they come here 
    >{children}</button>
  )
}

export default Button