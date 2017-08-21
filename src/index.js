import React from 'react'
import logger from 'redux-logger'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import todoApp from './reducers/index'
import App from './components/App'

let store = createStore(todoApp, applyMiddleware(logger))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)