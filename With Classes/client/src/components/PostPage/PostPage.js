import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'
import AddComment from '../AddComment/AddComment'
import Comments from '../Comments/Comments'

import { getPost, deletePost } from '../../store/actions/postActions'

export class PostPage extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPost(id)
  }

  deletePost = () => {
    const id = this.props.match.params.id
    this.props.deletePost(id, this.props.history)
  }

  render() {
    const { post, user } = this.props

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
            <button onClick={this.deletePost} className="btn btn-danger">
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
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  post: state.postReducer.post,
})

export default connect(mapStateToProps, { getPost, deletePost })(PostPage)
