import { createSelector } from 'reselect'

const getProjectsFromState = state => state.db.projects

export const getProjects = createSelector(
    [getProjectsFromState],
    (projects) =>
        Object.values(projects)
)