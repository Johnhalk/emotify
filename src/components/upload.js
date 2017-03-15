import React, { Component } from 'react';

class Upload extends Component {

  handleFileUpload = () => {
    const file = this.refs.fileName.files[0];
    console.log(file);
  }
  render() {
    return (
      <form>
      <input type="file" ref="fileName" name="fileName" />
      <button onClick={this.handleFileUpload}>Upload</button>
      </form>
    );
  }
}
export default Upload;
