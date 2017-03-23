import React, { Component } from 'react';
var dataConverter = require('../data/chartDataConverter');
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
      var graph = <RadarPresentation data={dataConverter(this.props.data, this.state.graphType)} width={this.props.width} height={this.props.height}/>;
        break;
      case "positivity":
        var graph = <PositivityIndex data={dataConverter(this.props.data, this.state.graphType)} interval={this.props.interval}/>;
        break;
    }

    return (
      <div>
        <SelectGraph onChange={this.changeGraphType} graphType={this.state.graphType}/>
        {graph}
      </div>
    );
  }
}

export default GraphContainer;
