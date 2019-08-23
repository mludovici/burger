import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import thunk from 'redux-thunk';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

import createSagaMiddleware from 'redux-saga';
import { watchAuth, watchBurgerBuilder, watchOrder } from './store/sagas/index';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null || compose;

const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
});

const sagaMiddleware = createSagaMiddleware();

const store= createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBurgerBuilder);
sagaMiddleware.run(watchOrder);

export const someContext = React.createContext({
    someMessage: "Hello this is WOrld!"
});

const app = (
    //Provider has to wrap everything
    <BrowserRouter>
        <Provider store={store}>
                       

            <someContext.Provider value={{message:"Ringeldingeldong"}}>
                <App />
            
            </someContext.Provider>
            
        </Provider>
        </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
