import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import ListBlogposts from './components/ListBlogposts'
import DetailBlogpost from './components/DetailBlogpost'
import NewBlogpost from './components/NewBlogpost'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />


        <Switch>
          <Route exact path={"/posts"}>
            <ListBlogposts />
          </Route>
          <Route exact path={"/posts/new"}>
            <NewBlogpost />
          </Route>
          <Route exact path={"/posts/:postID"}>
            <DetailBlogpost />
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
