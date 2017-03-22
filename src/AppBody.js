import React, { Component } from 'react';

import {callAPI} from './services/mcsEmotionApiTalker'

import './AppBody.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'

import SwipeableViews from 'react-swipeable-views';

class AppBody extends Component {
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

  getFaceDataForGraph = () => {
    if (this.state.faceData !== 'Awaiting input...') {
       return <GraphContainer data={this.state.faceData} width={200} height={200} interval={this.state.interval} />
    } else {
      return this.state.faceData
    }
  }

  getFaceDataForColour = () => {
    if (this.state.faceData !== 'Awaiting input...') {
       return <ColoursContainer data={this.state.faceData}/>
    }
  }

  render() {
    var graphContainer = this.getFaceDataForGraph()
    var colourContainer = this.getFaceDataForGraph()


    return (
      <div className="AppBody">
        <SwipeableViews index={this.props.tabIndex} onChangeIndex={this.handleChangeIndex} className="swipeable-views">
          <div className="slide slide1">
            <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
          </div>
          <div className="slide slide2">
            {graphContainer}
          </div>
          <div className="slide slide3">
            SEE CHANGING COLORS!
            {colourContainer}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default AppBody;
