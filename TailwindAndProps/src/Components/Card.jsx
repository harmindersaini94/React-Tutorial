import React from 'react'

//Version 1
// function Card(props){
//     console.log(props)
//     return(
//         <>
//             <br></br>
//             <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//             <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={props.cardName.img} alt="" width="384" height="512" />
//             <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
//                 <blockquote>
//                 <p className="text-lg font-medium">
//                     “{props.cardName.desc}”
//                 </p>
//                 </blockquote>
//                 <figcaption className="font-medium">
//                 <div className="text-sky-500 dark:text-sky-400">
//                 {props.cardName.name}
//                 </div>
//                 <div className="text-slate-700 dark:text-slate-500">
//                 {props.cardName.designation}
//                 </div>
//                 </figcaption>
//             </div>
//             </figure>
//         </>
//     )
// }

//Version 2
function Card({cardName}){  // this is called resturcturing, this way we can directly use cardNamr.prpty unlike above
    console.log({cardName})
    return(
        <>
            <br></br>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={cardName.img} alt="" width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-medium">
                    “{cardName.desc}”
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                {cardName.name}
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                {cardName.designation}
                </div>
                </figcaption>
            </div>
            </figure>
        </>
    )
}

export default Card