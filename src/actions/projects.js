import { ADD_PROJECT, REMOVE_PROJECT } from '../constants/action-types'
import cuid from 'cuid'

export const addProject = ({
    title
}) => ({
    type: ADD_PROJECT,
    payload: {
        id: cuid(),
        title
    }
})

export const removeProject = (id) => ({
    type: REMOVE_PROJECT,
    payload: {
        id
    }
})