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
    var colourContainer = this.getFaceDataForColour()

    // turning off swipe elements, to use only with mobile version
    var swipeLibraryElementOpen, swipeLibraryElementClose, swipeCssClass
    var isMobile = false;
    if (isMobile) {
      swipeLibraryElementOpen = <SwipeableViews index={this.props.tabIndex} onChangeIndex={this.handleChangeIndex} className="swipeable-views">
      swipeLibraryElementClose = </SwipeableViews>
      swipeCssClass = "slide"
    } else {
      swipeCssClass = ""
    }

    return (
      <div className="AppBody">
        {swipeLibraryElementOpen}
          <div className={swipeCssClass + "body-container-1 body-containers"}>
            <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
          </div>
          <div className={swipeCssClass + "body-container-2 body-containers"}>
            {graphContainer}
          </div>
          <div className={swipeCssClass + "body-container-3 body-containers"}>
            // SEE CHANGING COLORS!
            // {colourContainer}
          </div>
        {swipeLibraryElementClose}
      </div>
    );
  }
}

export default AppBody;
