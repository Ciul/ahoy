import { ADD_PROJECT, REMOVE_PROJECT } from '../../constants/action-types'
import { Map } from 'immutable'

const initialState = Map({
  '1': {
    id: 1,
    title: 'Project 1'
  },
  '2': {
    id: 2,
    title: 'Project 2'
  }
})

const projectsReducer = (projects = initialState, action) => {
  const { type, payload } = action
  
  switch(type) {
    case ADD_PROJECT:
      return projects.set(payload.id, payload)
    case REMOVE_PROJECT:
      return projects.delete(payload.id.toString())
  }

  return projects
}

export default projectsReducer
