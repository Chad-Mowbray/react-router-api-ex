import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'

const DetailBlogpost = () => {

  const {postID} = useParams()
  const [blogPost, setBlogPost] = useState('')


  useEffect( () => {
    const getBlogPost = async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      const responseBody = await response.json()
      setBlogPost(responseBody)

    }
    getBlogPost()

  }, [postID])

  if (!blogPost) {
    return <h1>Loading...</h1>
  } else {
    return ( 
      <div>
        <h1>Detail View</h1>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.body}</p>
      </div>
     );

  }

}
 
export default DetailBlogpost;