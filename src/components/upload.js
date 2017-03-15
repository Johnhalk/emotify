import React, { Component } from 'react';
import {callAPI} from '../services/emotion'

class Upload extends Component {

  constructor() {
    super();
    this.state = {
      ip: 'Loading',
      fileObj: null,
    };
  }

  handleFileUpload = () => {
    const file = this.refs.fileName.files[0];
    this.setState({fileObj: file})
    this.fetchAjax(file);
  }

  fetchAjax = (file) => {
  console.log('Fetching ajax...');
  callAPI(file)
    .then(ip => this.setState({ip: ip}))
    .catch(err => console.log(err, 'There was an error'))
  }

  render() {
    let {ip} = this.state;
    return (
      <div>
      <form>
      <input type="file" ref="fileName" name="fileName" />
      <button type='button' onClick={this.handleFileUpload}>Upload</button>
      </form>
      {ip}
      </div>
    );
  }
}
export default Upload;
