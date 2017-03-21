import React, { Component } from 'react';

import {callAPI} from './services/mcsEmotionApiTalker'

import './App.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'

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
    if (faceData !== 'Awaiting input...') {
       graphContainer = <GraphContainer data={faceData} width={200} height={200} interval={this.state.interval} />
       var colourContainer = <ColoursContainer data={faceData}/>

    } else {
      graphContainer = faceData
      var colourContainer;
    }

    const { tabIndex } = this.props;
    return (
      <div className="App">
        <SwipeableViews index={this.props.tabIndex} onChangeIndex={this.handleChangeIndex} className="swipeable-views">
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            {graphContainer}
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)} className="asadsafd">
            SEE CHANGING COLORS!
            {colourContainer}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
