import React from 'react';
import ReactDOM, { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.scss';
import App from './components/App';

import FormReducer from './reducers/form'

const rootEl = document.getElementById('root'),
    store = createStore(
        FormReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

render (
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
)

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextApp = require('./components/App').default
        ReactDOM.render(
            <NextApp />,
            rootEl
        )
    })
}