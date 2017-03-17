import React, { Component } from 'react';
import logo from '../public/logo_v1.png';
import './App.css';
import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphPresentation from './components/graph/graphPresentation'
import { callAPI } from './services/emotion';

class App extends Component {
  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input...'
    }
  }

  getEmotionData = (image) => {
    var faceData = callAPI(image)
    this.setState({
      faceData: faceData
    })
  }

  render() {
    let {faceData} = this.state;
    if (faceData !== 'Awaiting input...') {
       var graphPresentation = <GraphPresentation data={JSON.parse(faceData)} width={600} height={600}  />
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
          <SnapshotContainer onChange={this.getEmotionData} width={400} height={300} />
        </div>
        <p>
          {graphPresentation}
        </p>
      </div>
    );
  }
}

export default App;
