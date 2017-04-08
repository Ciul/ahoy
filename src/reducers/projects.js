import Immutable from 'immutable'


const initialState = Immutable.Map({
  1: {
    id: 1,
    title: 'Project 1'
  },
  2: {
    id: 2,
    title: 'Project 2'
  }
})
const projectsReducer = (projects = initialState, action) => {
  return projects
}

export default projectsReducer
