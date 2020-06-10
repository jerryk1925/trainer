import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'trainer/assets/style/index.css';

import { App } from 'trainer/App';

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
