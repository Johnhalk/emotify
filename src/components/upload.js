import React, { Component } from 'react';

class Upload extends Component {
  render() {
    return (
      <form>
      <input type="file" className="fileName" name="fileName" />
      <button>
      Upload
      </button>
      </form>
    );
  }
}

export default Upload;
