import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStorage} from "./componentes/globalContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStorage>
    <App/>
    </GlobalStorage>
  </React.StrictMode>,
  document.getElementById('root')
);