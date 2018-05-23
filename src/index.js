import React from 'react';
import ReactDOM from 'react-dom';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import indexRoutes from "./routes/index";
import registerServiceWorker from './registerServiceWorker';

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/now-ui-dashboard.css?v=1.1.0";
import "./assets/css/demo.css";

import PagesHeader from './App/Shared/PagesHeader';

const hist = createBrowserHistory();
const logger = createLogger();
const rootReducer = combineReducers({});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Router history={hist}>            
        <Provider store={store}>  
            <div>
                <PagesHeader />    
                <Switch>            
                    {indexRoutes.map((prop, key) => {                
                    return <Route path={prop.path} key={key} component={prop.component} />;
                    })}
                </Switch>        
            </div>            
    </Provider>
    </Router>, document.getElementById('root'));    
        registerServiceWorker();
