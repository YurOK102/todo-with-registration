import React from 'react'

import Comment from '../Comment/Comment'

export class Comments extends React.Component {
  render() {
    const { comments } = this.props

    if (comments.length === 0) {
      return <p>Список комментариев пуст</p>
    }

    return (
      <div>
        {comments.map((comment) => (
          <Comment key={comment._id} comment={comment} />
        ))}
      </div>
    )
  }
}

export default Comments
