import React from 'react';
import ReactDOM from 'react-dom/client';
import {CounterApp} from './CounterApp';

// import {FirstApp} from './FirstApp';
// import {HelloWorldApp} from './HelloWorldApp';
import './style.css'; //importar estilos de css
import { HelloWorldApp } from './HelloWorldApp';


ReactDOM.createRoot (document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={20}/> */}
        <HelloWorldApp title="Hola, soy Clau"/>
    </React.StrictMode>
);

