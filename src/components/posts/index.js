/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { TYPES } from '../../state'
import { db } from '../../firebase'
import Post from '../post'
import {
  Container
} from './elements'

const Posts = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)

  useEffect(() => {
    db.collection('posts')
      .onSnapshot(snapshot => dispatch({
        type: TYPES.POSTS,
        posts: snapshot.docs.map(doc => doc.data())
      }))
  }, [])

  console.log(posts)

  return (
    <Container>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default Posts