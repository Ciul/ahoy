import './css/styles.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { storeCreate } from './includes/store'

const store = storeCreate()

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello World!</h1>
  </Provider>,
   document.getElementById('app')
)
