import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { loginUser } from '../../store/actions/authActions'
import { clearErrors } from '../../store/actions/errorActions'

const Login = ({ user, errors, loginUser, clearErrors }) => {
  let history = useHistory()

  const [data, setData] = useState({
    email: 'test@test.ru',
    password: '123456',
  })

  useEffect(() => {
    clearErrors()
    if (user) {
      history.push('/')
    }
  }, [])

  const { email, password } = data
  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    loginUser(data)
    history.push('/')
  }

  return (
    <div className="row">
      <form className="card p-3 m-3 mx-auto col-md-6" onSubmit={onSubmit}>
        <h2 className="text-center">Вход</h2>

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

        <button type="submit" className="btn btn-primary btn-lg mt-3">
          Войти
        </button>
      </form>
    </div>
  )
}

// export class Login extends React.Component {
//   state = {
//     email: 'test@test.ru',
//     password: '123456',
//   }

//   componentDidUpdate() {
//     if (this.props.user) {
//       this.props.history.push('/')
//     }
//   }

//   componentDidMount() {
//     this.props.clearErrors()
//     if (this.props.user) {
//       this.props.history.push('/')
//     }
//   }

//   onChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }

//   onSubmit = (e) => {
//     e.preventDefault()
//     this.props.loginUser(this.state)
//   }

//   render() {
//     const { errors } = this.props
//     const { email, password } = this.state

//     return (
//       <div className="row">
//         <form
//           className="card p-3 m-3 mx-auto col-md-6"
//           onSubmit={this.onSubmit}
//         >
//           <h2 className="text-center">Вход</h2>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="form-control"
//               value={email}
//               onChange={this.onChange}
//             />
//             {errors.email && <div className="text-danger">{errors.email}</div>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="form-control"
//               value={password}
//               onChange={this.onChange}
//             />
//             {errors.password && (
//               <div className="text-danger">{errors.password}</div>
//             )}
//           </div>

//           <button type="submit" className="btn btn-primary btn-lg mt-3">
//             Войти
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  errors: state.errorReducer,
})

export default connect(mapStateToProps, { loginUser, clearErrors })(Login)
