import React, { Component } from 'react';

import {callAPI} from './services/mcsEmotionApiTalker'

import './AppBody.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'

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
      return (
        <div className="graphContainer">
          {this.state.faceData}
        </div>
      )
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

    return (
      <div className="AppBody">
        <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
        {graphContainer}
      </div>
    );
  }
}

export default AppBody;
