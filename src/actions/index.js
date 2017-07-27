import { createAction } from 'redux-actions'

export const addTodo = createAction('ADD_TODO')

export const toggleTodo = createAction('TOGGLE_TODO')

export const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER')