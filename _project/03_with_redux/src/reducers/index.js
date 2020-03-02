import { combineReducers } from 'redux'
import tasks from './tasks'
// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  tasks
})

export default rootReducer

