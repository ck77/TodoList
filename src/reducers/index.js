import {
    handleActions
} from 'redux-actions'

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter
} from '../actions/index'

const initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

const todoReducer = handleActions({
    [addTodo]: (state, action) => {
        return [
            ...state,
            action.payload
        ]
    },
    [toggleTodo]: (state, action) => {
        return state.map(function (todo) {
            if (todo.id == action.payload) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo
            }
        })
    },
    [setVisibilityFilter]: (state, action) => {
        return action.payload
    }
}, initialState)

export default todoReducer