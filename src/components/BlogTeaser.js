import {Link} from 'react-router-dom'

const BlogTeaser = ({title, body, postID}) => {
  return ( 
    <div>
      <Link to={`/posts/${postID}`}>{title}</Link>
      <p>{body}</p>
    </div>
   );
}
 
export default BlogTeaser;