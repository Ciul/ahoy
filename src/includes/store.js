import { createStore, applyMiddleware, compose } from 'redux'
import Immutable from 'immutable'

import { createReducer } from '../reducers'

const initialState  = Immutable.Record({
  projects: undefined
})
const middlewares    = []
const reducer         = createReducer(initialState)
const storeEnhancers  = compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const storeCreate = () => {
  return createStore(reducer, storeEnhancers)
}
