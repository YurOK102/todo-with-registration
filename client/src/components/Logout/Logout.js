import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../../store/actions/authActions'

const Logout = ({ logoutUser, history }) => {
  useEffect(() => {
    logoutUser()
    history.replace('/login')
  }, [])

  return <div>Выход</div>
}

// export class Logout extends React.Component {
//   componentDidMount() {
//     this.props.logoutUser()
//     this.props.history.replace('/login')
//   }

//   render() {
//     return <div>Выход</div>
//   }
// }

export default connect(null, { logoutUser })(Logout)
