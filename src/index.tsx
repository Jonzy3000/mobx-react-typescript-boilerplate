import React from 'react';
import ReactDOM from 'react-dom';
import TimerView from './TimerView'
import AppState from './AppState'

const appState = new AppState();
ReactDOM.render(<TimerView appState={appState} />, document.getElementById('root'));
