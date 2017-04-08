import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Immutable from 'immutable'

import { createReducer } from '../reducers'

const initialState  = Immutable.Record({
  projects: undefined
})

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
  serialize: {
    immutable: Immutable,
    refs: initialState
  }
});

const middlewares    = []
const reducer         = createReducer(initialState)
const storeEnhancers  = composeEnhancers(
  applyMiddleware(...middlewares)
)

export const storeCreate = () => {
  return createStore(reducer, storeEnhancers)
}
