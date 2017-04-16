import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { getProjectsArray } from '../../selectors/projects'
import AddProjectForm from './AddProjectControlledForm'
import { addProject, removeProject } from '../../actions/projects'

const ProjectsList = ({ projects, onAddProject, onRemoveProject }) =>
    <div>
        <h2>Projects</h2>
        {(projects.length) ?
            <ul>
                {projects.map((project) => 
                    <li key={project.id}>{project.title} <span onClick={() => { onRemoveProject(project.id) }}>Remove</span></li>
                )}
            </ul>
            :
            <span>No projects found.</span>
        }

        <div>
            <AddProjectForm onAddProject={onAddProject} />
        </div>
    </div>

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
            title: PropTypes.string
        })
    )
}

const mapStateToProps = (state) => ({
    projects: getProjectsArray(state)
})

const mapDispatchToProps = (dispatch) => ({
    onAddProject: (project) => {
        dispatch(addProject(project))
    },
    onRemoveProject: (id) => {
        dispatch(removeProject(id))
    }
})

const ProjectsListWithData = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsList)

export default ProjectsListWithData