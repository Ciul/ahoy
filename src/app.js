import './css/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { storeCreate } from './includes/store'
import Root from './components/Root'

const store = storeCreate()

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
   document.getElementById('app')
)