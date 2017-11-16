import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import { fetchShoppingList } from './actions';

// Create the redux store with two middleware
const store = createStore(
    reducer,
    applyMiddleware(
        // thunk works behind the scenes to allow us to make async actions. Without
        // it, the code in actions/index.js would not work.
        thunkMiddleware,
        createLogger() // just to help us see what's going on
    )
);

// Trigger the fetchShoppingList "action"
store.dispatch(fetchShoppingList());

// Just standard React & Redux stuff here.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
