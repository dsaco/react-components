import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './pages/App';
import './styles/main.scss';

const root = (
    <HashRouter>
        <App />
    </HashRouter>
);
const container = document.querySelector('#root');

ReactDOM.render(root, container);