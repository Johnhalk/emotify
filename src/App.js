import React, { Component } from 'react';

import {callAPI} from './services/mcsEmotionApiTalker'

import './App.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'

import SwipeableViews from 'react-swipeable-views';

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

    var graphContainer = faceData
    var colourContainer
    if (faceData !== 'Awaiting input...') {
       graphContainer = <GraphContainer data={faceData} width={200} height={200} interval={this.state.interval} />
       colourContainer = <ColoursContainer data={faceData}/>
    }

    return (
      <div className="App">
        <SwipeableViews index={this.props.tabIndex} onChangeIndex={this.handleChangeIndex} className="swipeable-views">
          <div className="slide slide1">
            <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
          </div>
          <div className="slide slide2">
            {graphContainer}
          </div>
          <div className="slide slide3" className="asadsafd">
            SEE CHANGING COLORS!
            {colourContainer}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
