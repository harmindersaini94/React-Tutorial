import React from 'react'

// const Card = (prop) => {
//   return (
//     <>
//     <br></br>
//     <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//     <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src= {prop.cardDetails.imgSrc} alt="" width="384" height="512" />
//     <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//         <blockquote>
//         <p className="text-lg font-medium">
//         {prop.cardDetails.empName}
//         </p>
//         </blockquote>
//         <figcaption className="font-medium">
//         <div className="text-sky-500 dark:text-sky-400">
//         {prop.cardDetails.job}
//         </div>
//         <div className="text-slate-700 dark:text-slate-500">
//         {prop.cardDetails.location}
//         </div>
//         </figcaption>
//     </div>
//     </figure>
// </>
//   )
// }

const Card = ({cardDetails}) => {
    return (
      <>
      <br></br>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src= {cardDetails.imgSrc} alt="" width="384" height="512" />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
          <p className="text-lg font-medium">
          {cardDetails.empName}
          </p>
          </blockquote>
          <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
          {cardDetails.job}
          </div>
          <div className="text-slate-700 dark:text-slate-500">
          {cardDetails.location}
          </div>
          </figcaption>
      </div>
      </figure>
  </>
    )
  }

export default Card