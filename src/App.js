import React, { Component } from 'react';
import logo from '../public/logo_horizontal_v2.png';
import './App.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'
import {callAPI} from './services/mcsEmotionApiTalker'

class App extends Component {
  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input...',
      interval: 4000,
      height: 600,
      width: 600
    }
  }

  updateFaceData = (faceData) => {
    this.setState({
      faceData: faceData
    })
  }

  getEmotionData = (image) => {
    callAPI(image)
      .then(faceData => this.updateFaceData(faceData))
      .catch(err => console.log(err, 'There was an error'))
  }


  render() {
    let {faceData} = this.state;
    if (faceData !== 'Awaiting input...') {
       var graphContainer = <GraphContainer data={faceData} width={this.state.width} height={this.state.height} interval={this.state.interval} />
       var colourContainer = <ColoursContainer data={faceData}/>
    } else {
      var graphContainer = faceData
      var colourContainer;
    }

    const wellStyles = {maxWidth: 300, margin: '0 auto 10px', backgroundColor: "hsla(193, 79%, 91%, 1)"};
    const wellStylesGraph = {maxWidth: 1100, margin: '0 auto 10px', backgroundColor: "hsla(193, 79%, 91%, 1)"};


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="mainBody">
          <div className="well" style={wellStyles}>
            <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
            {colourContainer}
            </div>

            <div  className="well" style={wellStylesGraph}>
            {graphContainer}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
