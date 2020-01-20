import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/couter';
import resultReducer from './store/result';

const rootReducer = combineReducers({
    count: counterReducer,
    resul: resultReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
