import React, {useEffect, useState} from 'react'
import blogDatabaseObj from "../Appwrite/Database";
import {Container, PostCard} from '../Components'
import Loader from '../Components/Loader'


function Home() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        blogDatabaseObj.GetActiveBlog().then((posts) => {
            setLoading(true)
            console.log("Should be true here ", loading)
            if (posts) {
                setLoading(false)
                console.log(loading)
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            // <div className="w-full py-8 mt-4 text-center">
            //     <Container>
            //         <div className="flex flex-wrap">
            //             <div className="p-2 w-full">
            //                 <h1 className="text-2xl font-bold hover:text-gray-500">
            //                     Login to read posts
            //                 </h1>
            //             </div>
            //         </div>
            //     </Container>
            // </div>
            
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                            <Loader />
                            </h1>
                        </div>
                    </div>
                </Container>
            </div> 
        )
    }
    return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-8 w-1/4'>
                        {console.log("post hete", post)}
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div> 
    )

}

export default Home