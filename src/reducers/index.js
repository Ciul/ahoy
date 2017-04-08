import Immutable from 'immutable'
import { combineReducers } from 'redux-immutable'

import projects from './projects'

const reducers = {
  projects
}

export const createReducer = (state) => {
  return combineReducers(reducers, state)
}
