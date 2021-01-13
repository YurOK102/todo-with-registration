import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Spinner from '../Spinner/Spinner'

import { editPost, getPost } from '../../store/actions/postActions'
import withAuth from '../../hocs/withAuth'

const EditPost = ({ post, getPost, editPost, match }) => {
  let history = useHistory()

  const titleInput = useRef()
  const textInput = useRef()

  useEffect(() => {
    const id = match.params.id
    getPost(id)
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    const id = match.params.id
    editPost(id, {
      title: titleInput.current.value,
      text: textInput.current.value,
    })
    history.push(`/post/${id}`)
  }

  if (!post) {
    return <Spinner />
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Заголовок</label>
        <input
          ref={titleInput}
          type="text"
          defaultValue={post.title}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="title">Содержание</label>
        <input
          ref={textInput}
          type="text"
          defaultValue={post.text}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-2">
        Редактировать
      </button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
})

export default withAuth(
  connect(mapStateToProps, { editPost, getPost })(EditPost)
)
