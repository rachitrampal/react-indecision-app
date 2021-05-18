import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from "./components/IndecisionApp";
//Load css styles to the app
import './styles/styles.scss';
// using this package to reset styles
import 'normalize.css/normalize.css';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


