import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'
import AddComment from '../AddComment/AddComment'
import Comments from '../Comments/Comments'

import { getPost, deletePost } from '../../store/actions/postActions'

const PostPage = ({ user, post, getPost, deletePost, match }) => {
  let history = useHistory()

  useEffect(() => {
    const id = match.params.id
    getPost(id)
  }, [])

  const delPost = () => {
    const id = match.params.id
    deletePost(id)
    history.replace('/')
  }

  if (!post) {
    return <Spinner />
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p className="text-muted">{post.author.name}</p>
      <p>{post.text}</p>

      {user && user.id === post.author._id ? (
        <div>
          <button onClick={delPost} className="btn btn-danger">
            Удалить
          </button>
          <Link to={`/edit/${post._id}`} className="btn btn-success ms-2">
            Редактировать
          </Link>
        </div>
      ) : null}

      <AddComment />
      <Comments comments={post.comments} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  post: state.postReducer.post,
})

export default connect(mapStateToProps, { getPost, deletePost })(PostPage)
