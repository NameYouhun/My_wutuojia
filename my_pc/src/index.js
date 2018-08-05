import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header_li from './components/header_li'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header_li />, document.getElementById('root'));
registerServiceWorker();
