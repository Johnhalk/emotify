import React, { Component } from 'react';
var JSONDataConverter = require('./JSONDataConverter');
import GraphPresentation from './graphPresentation'

class GraphContainer extends Component {


  render() {

    return (
      <GraphPresentation data={JSONDataConverter(this.props.data)} width={this.props.width} height={this.props.height}  />
    );
  }
}

export default GraphContainer;
