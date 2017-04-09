import { ADD_PROJECT, REMOVE_PROJECT } from '../../constants/action-types'

const initialState = {
  1: {
    id: 1,
    title: 'Project 1'
  },
  2: {
    id: 2,
    title: 'Project 2'
  }
}

const projectsReducer = (projects = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case ADD_PROJECT:
      return {
        ...projects,
        [payload.id]: {
          ...payload
        }
      }
  }

  return projects
}

export default projectsReducer
