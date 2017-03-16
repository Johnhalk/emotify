import React, { Component } from 'react';
import logo from '../public/logo_v1.png';
import './App.css';
import Webcam from './components/webcam/webcam'
import GraphPresentation from './components/graph/graphPresentation'

class App extends Component {
  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input...'
    }
  }

  getEmotionData = (faceData) => {
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
          <Webcam onChange={this.getEmotionData}/>
        </div>
        <p>
          {graphPresentation}
        </p>
      </div>
    );
  }
}

export default App;
