import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,

} from 'react-router-dom'

import ProjectsList from './projects/ProjectsList'

const Root = () =>
    <Router>
        <Switch>
            <Route exact path="/" component={ProjectsList} />
        </Switch>
    </Router>

export default Root