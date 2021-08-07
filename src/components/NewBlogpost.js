import {useState} from 'react'
import { Redirect } from 'react-router-dom'

const NewBlogpost = () => {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const handlePostSubmit = async (e) => {
    e.preventDefault()
    const options = {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 45
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", options)
    if(response.status === 201) {
      setShouldRedirect(true)
    }


  }

  if (shouldRedirect) {
    return <Redirect to={'/posts'} />
  } else {
    return ( 
  
      <div>
        <h1>Create Post</h1>
        <form onSubmit={handlePostSubmit}>
          <label htmlFor={"title"}>Title:</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" name="title"></input>
          <label htmlFor={"body"}>Body:</label>
          <input onChange={(e) => setBody(e.target.value)} type="text" name="body"></input>
          <button type="submit" value="Submit">Submit</button>
        </form>
  
      </div>
     );

  }

}
 
export default NewBlogpost;