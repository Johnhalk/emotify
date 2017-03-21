import React, { Component } from 'react';
import logo from '../public/logo_v1.png';
import './App.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
var  mcsEmotionApiTalker = require ('./services/mcsEmotionApiTalker');
import Tabs from 'material-ui/Tabs/Tabs';
import Tab from 'material-ui/Tabs/Tab';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Checkbox from 'material-ui/Checkbox';
import SwipeableViews from 'react-swipeable-views';
import ColorsConverter from './components/colors/colorsConverter';

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    height: "100%"
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class App extends Component {
  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input...',
      interval: 3000,
      height: 600,
      width: 600,
      windowWidth: window.innerWidth,
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

  setIsMobile = () => {
    this.setState({
      isMobile: this.state.windowWidth <= 500
    });
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
    this.setIsMobile()

  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({
      windowWidth: window.innerWidth
     });
    this.setIsMobile()
  };

  updateFaceData = (faceData) => {
    this.setState({
      faceData: faceData
    })
  }

  getEmotionData = (image) => {
    var faceData = mcsEmotionApiTalker(image, this.updateFaceData)
  }

  render() {

    const { index } = this.state;

    let {faceData} = this.state;
    if (faceData !== 'Awaiting input...') {
       var graphContainer = <GraphContainer data={faceData} width={200} height={200} interval={this.state.interval} />

       var color = ColorsConverter(faceData)
       var backgroundColor = {
         backgroundColor: `hsl(${color.hue}, ${color.saturation}%,  ${color.lightness}%)`
       }
    } else {
      var graphContainer = faceData
      var backgroundColor = {
        backgroundColor: `hsl(50, 0%,  0%)`
      }
    }

    var desktop_version = (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Choose a file and click analyse to begin!
        </p>
        <div>
          <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
        </div>
        {graphContainer}
    </div>
    )



    var mobile_version = (
      <div className="react-root">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <div className="main-cointaner">
            <Tabs value={index}>
              <Tab label="PANEL" value={0} onClick={this.handleChangeTabs(0)} />
              <Tab label="GRAPH" value={1} onClick={this.handleChangeTabs(1)} />
              <Tab label="COLOR" value={2} onClick={this.handleChangeTabs(2)} />
            </Tabs>
            <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex} className="swipeable-views">
              <div style={Object.assign({}, styles.slide, styles.slide1)}>
                <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide2)}>
                {graphContainer}
              </div>
              <div style={Object.assign({}, styles.slide, styles.slide3, backgroundColor)} className="asadsafd">
                SEE CHANGING COLORS!
              </div>
            </SwipeableViews>
          </div>
        </MuiThemeProvider>
      </div>
    );

    return this.state.isMobile ? mobile_version : mobile_version
  }
}

export default App;
