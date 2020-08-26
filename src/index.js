import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import reducer from './Store/reducer';
import {Provider} from 'react-redux';

const store = createStore(reducer); // Redux의 Store. store는 APP 컴포넌트 렌더링 하기 전에 index.js에서 정의

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); //Privider로 redux, react를 연결
registerServiceWorker();
