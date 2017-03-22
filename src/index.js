import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBody from './AppBody';
import './index.css';

import logo from './../public/logo_horizontal_v2.png';

class Index extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="wrapper">
        <div className="logo">
          <img src={logo} className="logo-img" alt="logo"/>
          <AppBody/>
        </div>
      </div>

    )
  }
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
