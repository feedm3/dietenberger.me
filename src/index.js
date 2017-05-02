import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/main';
import './index.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
