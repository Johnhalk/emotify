import React, { Component } from 'react';
import {callAPI} from '../services/emotion'

class Upload extends Component {
  handleFileUpload = () => {
    const file = this.refs.fileName.files[0];
    callAPI(file);
  }

  render() {
    return (
      <form>
      <input type="file" ref="fileName" name="fileName" />
      <button type='button' onClick={this.handleFileUpload}>Upload</button>
      </form>
    );
  }
}
export default Upload;
