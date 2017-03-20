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
      interval: 3000,
      height: 600,
      width: 600,
      windowWidth: window.innerWidth
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
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
    const isMobile = this.state.windowWidth <= 500;

    let {faceData} = this.state;
    if (faceData !== 'Awaiting input...') {
       var graphContainer = <GraphContainer data={faceData} width={this.state.width} height={this.state.height} interval={this.state.interval} />
    } else {
      var graphContainer = faceData
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
      <div className="App">
MOBILE
      </div>
    )

    return isMobile ? mobile_version : desktop_version
  }
}

export default App;
