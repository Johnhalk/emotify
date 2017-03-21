import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import LogoPresentation from './components/logo/logoPresentation'

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
      <div>
        <LogoPresentation />
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div className="main-cointaner">
            <Tabs value={index}>
              <Tab label="PANEL" value={0} onClick={this.handleChangeTabs(0)} />
              <Tab label="GRAPH" value={1} onClick={this.handleChangeTabs(1)} />
              <Tab label="COLOR" value={2} onClick={this.handleChangeTabs(2)} />
            </Tabs>
            <App tabIndex={this.state.index} handleChangeIndex={this.handleChangeIndex}/>
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
