import React, { Component } from 'react';
var JSONDataConverter = require('./JSONDataConverter');
import RadarPresentation from './graphTypes/radarPresentation'
import PositivityIndex from './graphTypes/positivityIndex'
import SelectGraph from './selectGraph'

class GraphContainer extends Component {
  constructor() {
    super()
    this.state = {
      graphType: 'radar'
    }
  }

  changeGraphType = (graphType) => {
    this.setState({
      graphType: graphType
    });
  }

  render() {
    switch (this.state.graphType) {
      case "radar":
      var graph = <RadarPresentation data={JSONDataConverter(this.props.data, this.state.graphType)} width={this.props.width} height={this.props.height}/>;
        break;
      case "timeSeries":
        var graph = <PositivityIndex data={JSONDataConverter(this.props.data, this.state.graphType)} interval={this.props.interval}/>;
        break;
    }

    return (
      <div>
        <SelectGraph onChange={this.changeGraphType}/>
        {graph}
      </div>
    );
  }
}

export default GraphContainer;
