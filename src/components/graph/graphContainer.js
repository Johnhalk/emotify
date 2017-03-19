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
      console.log(this.props.interval)
      var graph = <PositivityIndex data={JSONDataConverter(this.props.data)} interval={this.props.INTERVAL}/>;
        break;
      case "timeSeries":
        console.log(this.props.interval)
        var graph = <PositivityIndex data={JSONDataConverter(this.props.data)} interval={this.props.INTERVAL}/>;
        break;
      default:
        var graph = 'test'
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
