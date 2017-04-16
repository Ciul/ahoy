import React from 'react'

const AddProjectForm = () => {
    let _nameInput

    const handleSubmit = (event) => {
        event.preventDefault()
        _nameInput.value = ''
        _nameInput.focus()
    }
    
    return <form onSubmit={handleSubmit}>
        <h3>Add Project</h3>

        <div>
            <label htmlFor="title"></label>
            <input id="title" name="name" type="text" placeholder="[Project title]" required defaultValue='New Project' ref={(input) => _nameInput = input} />
        </div>

        <button type="submit">Submit</button>
    </form>
}

export default AddProjectForm