import React from 'react'

function Container({children}) {
// Both the Syntax below are good if you have only one line


//   return (
//     <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>
//   )

return <div className='w-full max-w-6xl mx-auto px-4'>{children}</div>;

}

export default Container