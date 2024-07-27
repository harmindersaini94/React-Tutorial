import React from 'react'
import blogDatabaseObj from '../Appwrite/Database'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {  //<-- here we took firt parameter as $id, coz the the name para that appwrite tak, its name inclue $
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full h-72 justify-center bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-3'>
              {console.log("Image here", featuredImage)}
                <img src={blogDatabaseObj.PreviewFile(featuredImage)} alt={title} className='rounded-xl w-52 h-52'></img>
            </div>
            <h2 className='whitespace-nowrap w-full overflow-hidden overflow-ellipsis font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard