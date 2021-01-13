import React from 'react'

import Comment from '../Comment/Comment'

const Comments = ({ comments }) => {
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

// export class Comments extends Component {
//   render() {
//     const { comments } = this.props

//     if (comments.length === 0) {
//       return <p>Список комментариев пуст</p>
//     }

//     return (
//       <div>
//         {comments.map((comment) => (
//           <Comment key={comment._id} comment={comment} />
//         ))}
//       </div>
//     )
//   }
// }

export default Comments
