import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import Time from './App/Time/Views/Time';
import registerServiceWorker from './registerServiceWorker';

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.css?v=1.1.0";
import "./assets/css/demo.css";

const logger = createLogger();

const rootReducer = combineReducers({});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider  store={store}>
        <Time />
    </Provider>, document.getElementById('root'));    
    registerServiceWorker();
