import React from 'react'
import { connect } from 'react-redux'

const ProjectsList = ({ projects }) => {
    
    const list = 
        <ul>
            {Object.keys(projects).map((id) => 
                <li key={projects[id].id}>{projects[id].title}</li>
            )}
        </ul>

    const emptyList = <div>No projects found.</div>

    return <div>
        <h2>Projects</h2>
        { Object.keys(projects).length ? list : emptyList }
    </div>
}

const mapStateToProps = (state) => {
    const projects = state.db.projects
    
    return {
        projects
    }
}

const ProjectsListWithData = connect(
    mapStateToProps
)(ProjectsList)

export default ProjectsListWithData