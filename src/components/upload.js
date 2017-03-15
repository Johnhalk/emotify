import React, { Component } from 'react';
import { callAPI } from '../services/emotion';

class Upload extends Component {

  constructor(){
    super()
    this.state = {
      data: 'Awaiting input'
    };
  }

  handleFileUpload = () => {
    const file = this.refs.fileName.files[0];
    callAPI(file)
    .then(data => this.setState({data: data}))
    .catch(err => console.log(err, 'There was an error'))
  }

  render() {
    let {data} = this.state;
    return (
      <div>
      <form>
      <input type="file" ref="fileName" name="fileName" />
      <button type='button' onClick={this.handleFileUpload}>Upload</button>
      </form>
      {data}
      </div>
    );
  }
}
export default Upload;
