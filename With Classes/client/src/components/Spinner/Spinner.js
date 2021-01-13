import React from 'react'
import spinner from './spinner.gif'

export class Spinner extends React.Component {
  render() {
    return (
      <div>
        <img
          src={spinner}
          alt="Загрузка"
          style={{
            display: 'block',
            margin: 'auto',
            width: '100px',
          }}
        />
      </div>
    )
  }
}

export default Spinner
