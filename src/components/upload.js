import React, { Component } from 'react';
import { callAPI } from '../services/emotion';
import GraphPresentation from './graph/graphPresentation'


class Upload extends Component {

  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input'
    };
  }

  handleFileUpload = () => {
    const file = this.refs.fileName.files[0];
    callAPI(file)
    .then(faceData => this.setState({faceData: faceData}))
    .catch(err => console.log(err, 'There was an error'))
  }

  render() {
    let {faceData} = this.state;
    if (faceData !== 'Awaiting input') {
       var graphPresentation = <GraphPresentation data={JSON.parse(faceData)} width={600} height={600}  />
    };

    return (
      <div>
      <form>
      <input type="file" ref="fileName" name="fileName" />
      <button type='button' onClick={this.handleFileUpload}>Upload</button>
      </form>
        {graphPresentation}
      </div>
    );
  }
}
export default Upload;
