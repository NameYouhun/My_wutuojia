import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header_li from './components/header_li'
import Main_wang from './components/main_wang'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header_li />, document.getElementById('root'));
ReactDOM.render(<Main_wang />, document.getElementById('root'));
registerServiceWorker();
