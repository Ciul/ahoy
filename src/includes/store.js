import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createReducer } from '../reducers'
import middlewares from '../middlewares'

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options if needed
});

const reducer         = createReducer()
const storeEnhancers  = composeEnhancers(
  applyMiddleware(...middlewares)
)

export const storeCreate = () => {
  return createStore(reducer, storeEnhancers)
}
