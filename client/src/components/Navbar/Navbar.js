import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary nm-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          React Blog
        </Link>

        <div className="collapse navbar-collapse d-flex">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Добавить статью
              </Link>
            </li>
          </ul>

          {user ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/#" className="nav-link">
                  {user.name}
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/logout" className="nav-link">
                  Выход
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Вход
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Регистрация
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}

// export class Navbar extends Component {
//   render() {
//     const { user } = this.props

//     return (
//       <nav className="navbar navbar-expand-md navbar-dark bg-primary nm-3">
//         <div className="container">
//           <Link to="/" className="navbar-brand">
//             React Blog
//           </Link>

//           <div className="collapse navbar-collapse d-flex">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link to="/add" className="nav-link">
//                   Добавить статью
//                 </Link>
//               </li>
//             </ul>

//             {user ? (
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to="/#" className="nav-link">
//                     {user.name}
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/logout" className="nav-link">
//                     Выход
//                   </Link>
//                 </li>
//               </ul>
//             ) : (
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to="/login" className="nav-link">
//                     Вход
//                   </Link>
//                 </li>

//                 <li className="nav-item">
//                   <Link to="/register" className="nav-link">
//                     Регистрация
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>
//       </nav>
//     )
//   }
// }

const mapStateToProps = (state) => ({
  user: state.authReducer.user,
})

export default connect(mapStateToProps)(Navbar)
