import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../Components'
import blogDatabaseObj from "../Appwrite/Database";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            console.log("Slug Here ", slug)
            // blogDatabaseObj.GetActiveBlog(slug).then((post) => {
            blogDatabaseObj.GetBlog(slug).then((post) => {
                if (post) {
                    console.log("post here ", post)
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost