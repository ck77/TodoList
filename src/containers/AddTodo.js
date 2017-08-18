import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions/index'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        submitFunc: (e, input) => {
            e.preventDefault()
            dispatch(addTodo(input.value))
            input.value = ''
        }
    }
}

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { submitFunc } = this.props

        return (
            <div>
                <form onSubmit={(e) => submitFunc(e, this.textInput)}>
                    <input ref={(x) => this.textInput = x} />
                    <button type="submit">ADD TODO</button>
                </form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)