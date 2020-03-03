import {
  CREATE_LIST_TASK,
  SET_LIST_TASK,
  SET_SELECTED_LIST,
  UPDATE_LIST_TASK,
  SET_LISTS,
} from '../actions/app'


export const setLists = (payload) => ({
  type: SET_LISTS,
  payload,
})

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

export const updateListTask = (payload) => ({
  type: UPDATE_LIST_TASK,
  payload,
})