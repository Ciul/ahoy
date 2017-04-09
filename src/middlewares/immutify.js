import Immutable  from 'immutable'

const immutify = ({ dispatch, getState }) => next => action => {
    next(action)
}

export default immutify