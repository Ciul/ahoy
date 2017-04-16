import { createSelector } from 'reselect'

export const getProjects = state => state.getIn(['entities', 'projects'])

export const getProjectsArray = createSelector(
    [getProjects],
    (projects) => [...projects.values()]
    
)