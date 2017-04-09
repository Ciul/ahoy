import './css/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { storeCreate } from './includes/store'
import ProjectsList from './components/projects/ProjectsList'

const store = storeCreate()

setTimeout(() => {
  store.dispatch({
    type: 'ADD_PROJECT',
    payload: {
      id: 3,
      title: 'Project 3'
    }
  })
}, 2000)

ReactDOM.render(
  <Provider store={store}>
    <ProjectsList />
  </Provider>,
   document.getElementById('app')
)