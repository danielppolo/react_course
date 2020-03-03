import lists from '../data/tasks.json'

const initialState = {
  lists,
}
function tasks(state, action) {
  const { type, payload } = action
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}

export default tasks