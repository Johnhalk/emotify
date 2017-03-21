import React, { Component } from 'react';
import { callAPI } from '../../services/mcsEmotionApiTalker';


class Upload extends Component {
  handleFileUpload = () => {
    const file = this.refs.fileName.files[0];
    callAPI(file)
      .then(faceData => this.props.onChange(faceData))
      .catch(err => console.log(err, 'There was an error'))
  }

  render() {
    return (
      <form>
        <input type="file" ref="fileName" name="fileName" />
        <button type='button' onClick={this.handleFileUpload}>Analyse</button>
      </form>
    );
  }
}
export default Upload;
