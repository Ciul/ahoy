import { combineReducers } from 'redux'

import projects from './projects'

const reducers = {
    projects
}

const initialState = {
    projects: undefined
}
export default combineReducers(reducers, initialState)