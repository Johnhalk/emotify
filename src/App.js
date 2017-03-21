import React, { Component } from 'react';

import {callAPI} from './services/mcsEmotionApiTalker'

import './App.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'
import {callAPI} from './services/mcsEmotionApiTalker'
import ColorsConverter from './components/colors/colorsConverter';

import SwipeableViews from 'react-swipeable-views';

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
      interval: 4000,
      height: 600,
      width: 600,
      index: 0,
    }
  }

  updateFaceData = (faceData) => {
    this.setState({
      faceData: faceData
    })
  }

  getEmotionData = (image) => {
    callAPI(image)
      .then(this.updateFaceData)
      .catch(console.log)
  }

  render() {
    let {faceData} = this.state;

    var graphContainer
    var backgroundColor
    if (faceData !== 'Awaiting input...') {
       graphContainer = <GraphContainer data={faceData} width={200} height={200} interval={this.state.interval} />

       var color = ColorsConverter(faceData)
       backgroundColor = {
         backgroundColor: `hsl(${color.hue}, ${color.saturation}%,  ${color.lightness}%)`
       }
    } else {
      graphContainer = faceData
      backgroundColor = {
        backgroundColor: `hsl(50, 0%,  0%)`
      }
    }

    const { tabIndex } = this.props;
    return (
      <div className="App">
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
                {colourContainer}
              </div>
            </SwipeableViews>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
