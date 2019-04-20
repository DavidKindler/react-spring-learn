import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import MobileMenu from './MobileMenu';
import PanelMenu from './PanelMenu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<MobileMenu />, document.getElementById('nxp-mobile-menu'));
ReactDOM.render(<PanelMenu />, document.getElementById('nxp-mobile-menu'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
