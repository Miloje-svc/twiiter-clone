import { TYPES } from '../index'

const initialState = {
  user: null,
  posts: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.USER: return {
      ...state,
      user: action.user
    }
    case TYPES.NO_USER: return {
      ...state,
      user: null
    }
    case TYPES.POSTS: return {
      ...state,
      posts: action.posts
    }
    default: return state
  }
}

export default reducer