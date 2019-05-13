import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';

const answers = {
    feelings : '',
    understanding : '',
    support : '',
    comments : '',
    urgent : ''
}


const moraleReducer = (state = answers, action) => {
    switch(action.type){
        case "SET_FEELINGS" :
            return {feelings : action.payload};
        case "SET_UNDERSTANDING" :
            return {understanding : action.payload};
        case "SET_SUPPORT" :
            return {support : action.payload};
        case "SET_COMMENTS" :
            return {comments : action.payload};
        case "SET_URGENT" :
            return {feelings : action.payload};
        default :
            return state;
    }
}
// const feelingsReducer = (state = answers, action) => {
//     if (action.type === "SET_FEELINGS") {
//         return [...state, action.payload];
//     }
//     return state;
// };
// const supportReducer = (state = answers, action) => {
//     if (action.type === "SET_UNDERSTANDING") {

//         return [...state, action.payload];
//     }
//     return state;
// };
// const understandingReducer = (state = answers, action) => {
//     if (action.type === "SET_SUPPORT") {

//         return [...state, action.payload];
//     }
//     return state;
// };
// const commentsReducer = (state = answers, action) => {
//     if (action.type === "SET_COMMENTS") {

//         return [...state, action.payload];
//     }
//     return state;
// };

const storeInstance = createStore(
    combineReducers({    
    moraleReducer,
        }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
