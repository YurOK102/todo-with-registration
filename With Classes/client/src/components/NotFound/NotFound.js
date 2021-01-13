import React from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1>Страница не найдена</h1>
        <p>
          Вернуться на <Link to="/">главную</Link>
        </p>
      </div>
    )
  }
}

export default NotFound
