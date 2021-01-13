import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { registerUser } from '../../store/actions/authActions'
import { clearErrors } from '../../store/actions/errorActions'

const Register = ({ user, errors, clearErrors, registerUser }) => {
  let history = useHistory()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  useEffect(() => {
    if (user) {
      history.push('/')
    }
    clearErrors()
  }, [user, clearErrors])

  const { name, email, password, password2 } = data
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    registerUser(data)
  }

  return (
    <div className="row">
      <form className="card p-3 mx-auto col-md-6" onSubmit={onSubmit}>
        <h2 className="text-center">Регистрация</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={name}
            onChange={onChange}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={onChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={onChange}
          />
          {errors.password && (
            <div className="text-danger">{errors.password}</div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password2">Password</label>
          <input
            type="password"
            name="password2"
            className="form-control"
            value={password2}
            onChange={onChange}
          />
          {errors.password2 && (
            <div className="text-danger">{errors.password2}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary btn-lg mt-3">
          Зарегистрироваться
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  errors: state.errorReducer,
})

export default connect(mapStateToProps, { registerUser, clearErrors })(Register)
