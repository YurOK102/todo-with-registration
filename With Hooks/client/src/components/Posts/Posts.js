import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Spinner from '../Spinner/Spinner'
import Post from '../Post/Post'

import { getPosts } from '../../store/actions/postActions'

const Posts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts()
  }, [])

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

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
})

export default connect(mapStateToProps, { getPosts })(Posts)
