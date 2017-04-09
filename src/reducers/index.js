import { combineReducers } from 'redux'

import dbReducer from './db'
// import uiReducer from './ui'

const reducers = {
  db: dbReducer
}

const initialState = {
  db: undefined
}

export const createReducer = () => {
  return combineReducers(reducers, initialState)
}
