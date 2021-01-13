import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import { addComment } from '../../store/actions/postActions'

const AddComment = ({ user, addComment, match }) => {
  const [text, setText] = useState({})

  const {} = text
  const onChange = (e) => {
    setText({ [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const id = match.params.id
    addComment(id, text)
    setText({ text: '' })
  }

  if (!user) {
    return (
      <div>
        <p>
          Комментировать могут только зарегестрированные пользователи <br />
          <Link to="/login">Войти</Link> или{' '}
          <Link to="/register">зарегестрироваться</Link>
        </p>
      </div>
    )
  }
  return (
    <form className="mb-3" onSubmit={onSubmit}>
      <div className="form-group mt-5">
        <label htmlFor="title">Коментарий</label>
        <textarea
          type="text"
          value={text.text}
          onChange={onChange}
          name="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Отправить
      </button>
    </form>
  )
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
})

export default withRouter(connect(mapStateToProps, { addComment })(AddComment))
