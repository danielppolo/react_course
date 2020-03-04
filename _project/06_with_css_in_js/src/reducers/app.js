import {
  SET_LIST_TASK,
  SET_SELECTED_LIST,
  UPDATE_LIST_TASK,
  SET_LISTS,
} from '../actions/app'

const initialState = {
  lists: [],
  selected: null,
}

function app(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LISTS:
      return { ...state, lists: payload }
    case SET_LIST_TASK: {
      const { selected } = state
      const newLists = [...state.lists]
      const selectedList = newLists.find((list) => list.id === selected)
      const newList = { ...selectedList }
      newList.tasks.push(payload)
      return {
        ...state,
        lists: newLists,
      }
    }
    case UPDATE_LIST_TASK: {
      const { selected } = state
      const newLists = [...state.lists]
      const list = newLists.find((lst) => lst.id === selected)
      const newList = { ...list }
      const tasks = newList.tasks.map((task) => {
        let isDone = task.done
        if (task.id === payload.id) isDone = !task.done
        return { ...task, done: isDone }
      })
      newList.tasks = tasks
      const filteredLists = newLists.filter((lst) => !(lst.id === selected))
      return {
        ...state,
        lists: [...filteredLists, newList],
      }
    }
    case SET_SELECTED_LIST:
      return { ...state, selected: payload }
    default: return state
  }
}

export default app
