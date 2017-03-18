import React, { Component } from 'react';
import logo from '../public/logo_v1.png';
import './App.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
var  mcsEmotionApiTalker = require ('./services/mcsEmotionApiTalker');

class App extends Component {
  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input...',
      graphType: 'radar'
    }
  }

  changeGraphType(graphType) {
    this.setState({
      graphType: graphType
    });
  }

  updateFaceData = (faceData) => {
    this.setState({
      faceData: faceData
    })
  }

  getEmotionData = (image) => {
    var faceData = mcsEmotionApiTalker(image, this.updateFaceData)
  }

  render() {
    let {faceData} = this.state;
    if (faceData !== 'Awaiting input...') {
       var graphPresentation = <GraphContainer data={faceData} width={600} height={600} changeGraphType={this.changeGraphType} />
    } else {
      var graphPresentation = faceData
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          Choose a file and click analyse to begin!
        </p>
        <div>
          <SnapshotContainer onChange={this.getEmotionData} interval={3000} width={400} height={300} />
        </div>
          {graphPresentation}
      </div>
    );
  }
}

export default App;
