import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/hello';

import './style.css';

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<Hello />, wrapper) : false;