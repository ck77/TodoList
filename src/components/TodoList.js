import React from 'react'

import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {
            todos.map(x => {
                return(
                    <Todo key={x.id} {...x} onClick={() => onTodoClick(x.id)}></Todo>
                )
            })
        }    
    </ul>
)

export default TodoList