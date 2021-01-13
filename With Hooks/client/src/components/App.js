import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Posts from './Posts/Posts'
import Login from './Login/Login'
import Register from './Register/Register'
import Logout from './Logout/Logout'
import PostPage from './PostPage/PostPage'
import AddPost from './AddPost/AddPost'
import EditPost from './EditPost/EditPost'
import NotFound from './NotFound/NotFound'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />

          <Route exact path="/post/:id" component={PostPage} />
          <Route exact path="/add" component={AddPost} />
          <Route exact path="/edit/:id" component={EditPost} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </>
  )
}

export default App
