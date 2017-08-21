import { combineReducers } from 'redux'

import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp


// import { handleActions } from 'redux-actions'

// import { addTodo, toggleTodo, setVisibilityFilter } from '../actions/index'

// const initialState = {
//     todos: [],
//     visibilityFilter: 'SHOW_ALL'
// }

// let todoIndex = 0

// const todoReducer = handleActions({
//     [addTodo]: (state, action) => {
//         return [
//             ...state,
//             {
//                 id: todoIndex++,
//                 text: action.payload,
//                 completed: false
//             }
//         ]
//     },
//     [toggleTodo]: (state, action) => {
//         return state.map(function (todo) {
//             if (todo.id == action.payload) {
//                 return {
//                     ...todo,
//                     completed: !todo.completed
//                 }
//             } else {
//                 return todo
//             }
//         })
//     },
//     [setVisibilityFilter]: (state, action) => {
//         return action.payload
//     }
// }, initialState)

// export default todoReducer