import React from 'react'
import { connect } from 'react-redux'

import Spinner from '../Spinner/Spinner'
import Post from '../Post/Post'

import { getPosts } from '../../store/actions/postActions'

export class Posts extends React.Component {
  componentDidMount() {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props

    if (!posts) {
      return <Spinner />
    }

    return (
      <div>
        {posts.map((post) => {
          return <Post key={post._id} post={post} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
})

export default connect(mapStateToProps, { getPosts })(Posts)
