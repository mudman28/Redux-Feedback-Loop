import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const feedback = {
        feeling : '',
        understanding : '',
        support : '',
        comments : '',
    }

const page = {
    currentPage : ''
}

const pageReducer = (state = page, action) => {
    switch(action.type){
        case "SET_PAGE" :
            return {currentPage : action.payload};
        default :
            return state;
    }
}

const moraleReducer = (state = feedback, action) => {
    switch(action.type){
        case "SET_FEELING" :
            return {...state, feeling : action.payload};
        case "SET_UNDERSTANDING" :
            return {...state, understanding : action.payload};
        case "SET_SUPPORT" :
            return {...state, support : action.payload};
        case "SET_COMMENTS" :
            return {...state, comments : action.payload};
        case "SET_URGENT" :
            return {...state, flagged : action.payload};
        default :
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({    
    moraleReducer,
    pageReducer
        }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
