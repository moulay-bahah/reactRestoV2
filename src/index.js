import ReactDOM from 'react-dom'
import AppRoutre from './AppRoutre'
import React from 'react-dom'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <AppRoutre />
  </Router>,
  document.getElementById('root')
);
