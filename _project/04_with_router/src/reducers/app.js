import initialLists from '../data/tasks.json'
import {
  SET_LIST_TASK,
  SET_SELECTED_LIST,
  TOGGLE_LIST_TASK,
} from '../actions/app'

const initialState = {
  lists: initialLists,
  selected: null,
}

function app(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_LIST_TASK: {
      const { selected, lists } = state
      const selectedList = lists.find((list) => list.id === selected)
      selectedList.tasks.push({
        ...payload,
        done: false,
      })
      return {
        ...state,
        lists,
      }
    }
    case SET_SELECTED_LIST:
      return { ...state, selected: payload }
    case TOGGLE_LIST_TASK: {
      const { selected } = state
      const newLists = [...state.lists]
      const list = newLists.find((lst) => lst.id === selected)
      const newList = { ...list }
      const tasks = newList.tasks.map((task) => {
        let isDone = task.done
        if (task.title === payload.title) isDone = !task.done
        return { ...task, done: isDone }
      })
      newList.tasks = tasks
      const filteredLists = newLists.filter((lst) => !(lst.id === selected))
      return {
        ...state,
        lists: [...filteredLists, newList],
      }
    }
    default: return state
  }
}

export default app
