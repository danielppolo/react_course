import {
  CREATE_LIST_TASK,
  SET_LIST_TASK,
  SET_SELECTED_LIST,
  TOGGLE_LIST_TASK,
} from '../actions/app'


export const createListTask = (payload) => ({
  type: CREATE_LIST_TASK,
  payload,
})

export const setListTask = (payload) => ({
  type: SET_LIST_TASK,
  payload,
})

export const setSelectedList = (payload) => ({
  type: SET_SELECTED_LIST,
  payload,
})

export const toggleListTask = (payload) => ({
  type: TOGGLE_LIST_TASK,
  payload,
})