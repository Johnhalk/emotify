import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppBody from './AppBody';
import './index.css';

import logo from './../public/logo_horizontal_v2.png';

// bunch of needed material-ui components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
// import Checkbox from 'material-ui/Checkbox';

class Index extends Component {
  constructor(){
    super()
    this.state = {
      index: 0,
    }
  }

    handleChangeTabs = (value) => () => {
      this.setState({
        index: value,
      });
    };

    handleChangeIndex = (index) => {
      this.setState({
        index,
      });
    };


  render() {
    const { index } = this.state;

    return (
      <div className="wrapper">
        <div className="logo">
          <img src={logo} className="logo-img" alt="logo"/>
        </div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div className="main-cointaner">
            <Tabs value={index}>
              <Tab label="PANEL" value={0} onClick={this.handleChangeTabs(0)} />
              <Tab label="GRAPH" value={1} onClick={this.handleChangeTabs(1)} />
              <Tab label="COLOR" value={2} onClick={this.handleChangeTabs(2)} />
            </Tabs>
            <AppBody tabIndex={this.state.index} handleChangeIndex={this.handleChangeIndex}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
};

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
