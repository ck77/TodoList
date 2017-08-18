import React from 'react'
import Todo from './Todo'

// const TodoList = ({ todos, onTodoClick }) => (
//     <ul>
//         {todos.map(todo =>
//             <Todo
//                 key={todo.id}
//                 {...todo}
//                 onClick={() => onTodoClick(todo.id)}
//             />
//         )}
//     </ul>
// )

class TodoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        console.log(this.props)

        const { todos, onTodoClick } = this.props
        return (
            <ul>
                {todos.map(todo =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onClick={() => onTodoClick(todo.id)}
                    />
                )}
            </ul>
        )
    }
}

export default TodoList