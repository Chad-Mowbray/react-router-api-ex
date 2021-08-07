import { useEffect, useState } from "react";
import BlogTeaser from './BlogTeaser'

const ListBlogposts = () => {

  const [posts, setPosts] = useState()
  const [warningMessage, setWarningMessage] = useState('')

  useEffect( () => {
    const getPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      if(response.status === 200) {
        const responseBody = await response.json()
        setPosts(responseBody)
      } else {
        setWarningMessage("Please try again later...")
      }
    }
    getPosts()
  }, [])

  const createPosts = () => {
    return posts.map( (postObj,i) => <BlogTeaser title={postObj.title} body={postObj.body.slice(0,20) + "..."} key={`${postObj.title.slice(0,10)}-${i}`} postID={postObj.id}/>)
  }

  if (warningMessage) {
    return <h2>{warningMessage}</h2>
  }
  else if (!posts) {
    return <h2>Loading...</h2>
  } else {
    return ( 
        <div>
          {createPosts()}
        </div>
     );
  }

}
 
export default ListBlogposts;