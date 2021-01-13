import React from 'react'
import { connect } from 'react-redux'

import Spinner from '../Spinner/Spinner'

import { editPost, getPost } from '../../store/actions/postActions'
import withAuth from '../../hocs/withAuth'

export class EditPost extends React.Component {
  constructor(props) {
    super(props)

    this.titleInput = React.createRef()
    this.textInput = React.createRef()
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPost(id)
  }

  onSubmit = (e) => {
    e.preventDefault()
    const id = this.props.match.params.id
    this.props.editPost(
      id,
      {
        title: this.titleInput.current.value,
        text: this.textInput.current.value,
      },
      this.props.history
    )
  }

  render() {
    const { post } = this.props

    if (!post) {
      return <Spinner />
    }

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input
            ref={this.titleInput}
            type="text"
            defaultValue={post.title}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Содержание</label>
          <input
            ref={this.textInput}
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
}

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
})

export default withAuth(
  connect(mapStateToProps, { editPost, getPost })(EditPost)
)
