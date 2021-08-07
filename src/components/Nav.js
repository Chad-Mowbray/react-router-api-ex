import {Link} from 'react-router-dom'

const Nav = () => {
  return ( 
    <div>
      <Link to={'/posts'}>View all Posts</Link>
      <Link to={'/posts/new'}>Create new post</Link>
    </div>
   );
}
 
export default Nav;