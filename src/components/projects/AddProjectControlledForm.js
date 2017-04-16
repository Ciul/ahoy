import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddProjectForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            title: ''
        }
    }

    handleChange(event) {
        this.setState({
            title: event.target.value
        })
    }

    handleClick() {
        this.refs.name.focus()
    }

    submit(event) {
        event.preventDefault()

        this.props.onAddProject({
            title: this.state.title
        })

        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.submit.bind(this)}>
                <h3>Add Project</h3>

                <div>
                    <label onClick={this.handleClick.bind(this)}>Title</label>
                    <input 
                        type="text"
                        ref='name'
                        value={this.state.title}
                        onChange={this.handleChange.bind(this)}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}

AddProjectForm.contextTypes = {
    store: PropTypes.object
}

export default AddProjectForm