import { combineReducers } from 'redux-immutable'
import { Record, Map } from 'immutable'

import entitiesReducer from './entities'
// import uiReducer from './ui'

const reducers = {
  entities: entitiesReducer
}

const initialState = Record({
  entities: undefined
})

export const createReducer = () => {
  return combineReducers(reducers, initialState)
}
