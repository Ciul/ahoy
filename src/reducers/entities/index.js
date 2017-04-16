import { combineReducers } from 'redux-immutable'
import { Map } from 'immutable'

import projects from './projects'

const reducers = {
    projects
}

export default combineReducers(reducers)