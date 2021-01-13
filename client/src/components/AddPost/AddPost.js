import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { addPost } from '../../store/actions/postActions'
import withAuth from '../../hocs/withAuth'

const AddPost = ({ user, addPost, history }) => {
  const [post, setPost] = useState({
    title: '',
    text: '',
  })

  const { title, text } = post
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    addPost(post, history)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Заголовок</label>
        <input
          type="text"
          value={title}
          onChange={onChange}
          name="title"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Содержание</label>
        <input
          type="text"
          value={text}
          onChange={onChange}
          name="text"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Опубликовать
      </button>
    </form>
  )
}

// export class AddPost extends React.Component {
//   state = {
//     title: '',
//     text: '',
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   onSubmit = (e) => {
//     e.preventDefault()
//     this.props.addPost(this.state, this.props.history)
//   }

//   render() {
//     const { title, text } = this.state

//     return (
//       <form onSubmit={this.onSubmit}>
//         <div className="form-group">
//           <label htmlFor="title">Заголовок</label>
//           <input
//             type="text"
//             value={title}
//             onChange={this.onChange}
//             name="title"
//             className="form-control"
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="title">Содержание</label>
//           <input
//             type="text"
//             value={text}
//             onChange={this.onChange}
//             name="text"
//             className="form-control"
//           />
//         </div>

//         <button type="submit" className="btn btn-primary mt-2">
//           Опубликовать
//         </button>
//       </form>
//     )
//   }
// }

export default withAuth(connect(null, { addPost })(AddPost))
