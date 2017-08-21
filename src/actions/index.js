let nextTodoId = 0
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}


// import { createAction } from 'redux-actions'

// export const addTodo = createAction('ADD_TODO')

// export const toggleTodo = createAction('TOGGLE_TODO')

// export const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER')