import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
//import CallbackHook from './components/06-memos/CallbackHook';
//import { Padre } from './components/07-tarea-memo/Padre';
//import MemoHook from './components/06-memos/MemoHook';
//import ExmpleRef from './components/04-use-ref/ExmpleRef';
//import Layout from './components/05-useLayoutEffect.js/Layout';
//import Memos from './components/06-memos/Memos';
//import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';
//import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './components/04-use-ref/FocusScreen';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
// import HookApp from './HookApp';
//import './components/08-useReducer/intro-reducer'
//import TodoApp from './components/08-useReducer/TodoApp';
//import './components/02-useEffect/effects.css';
import { MainApp } from './components/09-useContext/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*  <React.StrictMode>*/}
        <MainApp />
        {/* </React.StrictMode> */}
    </BrowserRouter>
);

