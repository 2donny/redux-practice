import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './Store/Reducer/counter';
import resultReducer from './Store/Reducer/result';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))); // Redux의 Store. store는 APP 컴포넌트 렌더링 하기 전에 index.js에서 정의

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); //Privider로 redux, react를 연결
registerServiceWorker();
