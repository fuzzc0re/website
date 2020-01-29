import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css';
// import * as serviceWorker from './serviceWorker';

import THEME from './ui/static/theme';
import { GlobalProvider } from './state/global/context';

import App from './ui/containers/App';

ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
    <CssBaseline />
    <Router>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register();
