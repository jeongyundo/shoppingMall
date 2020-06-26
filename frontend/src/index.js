
import React from 'react'
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import App from './components/App'

import configureStore from './store';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)))

const { store } = configureStore();

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>, document.querySelector('#root')
)