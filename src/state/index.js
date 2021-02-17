import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
export { default as TYPES } from './types'