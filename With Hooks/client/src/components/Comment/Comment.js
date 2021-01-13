import React from 'react'
import { connect } from 'react-redux'

import { deleteComment } from '../../store/actions/postActions'

const Comment = ({ deleteComment, comment, user }) => {
  const delComment = () => {
    const id = comment._id
    deleteComment(id)
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h4>{comment.author.name}</h4>
        <p>{comment.text}</p>
        {user && user.id === comment.author._id && (
          <button className="btn btn-danger" onClick={delComment}>
            Удалить
          </button>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
})

export default connect(mapStateToProps, { deleteComment })(Comment)
