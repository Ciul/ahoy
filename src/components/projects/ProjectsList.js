import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getProjects } from '../../selectors/projects'

const ProjectsList = ({ projects }) =>
    <div>
        <h2>Projects</h2>
        {(projects.length) ?
            <ul>
                {projects.map((project) => 
                    <li key={project.id}>{project.title}</li>
                )}       
            </ul>
            :
            <span>No projects found.</span>
        }
    </div>

ProjectsList.propTypes = {
    projects: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
            title: PropTypes.string
        })
    )
}

const mapStateToProps = (state) => {
    return {
        projects: getProjects(state)
    }
}

const ProjectsListWithData = connect(
    mapStateToProps
)(ProjectsList)

export default ProjectsListWithData