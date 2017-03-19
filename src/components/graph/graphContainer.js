import React, { Component } from 'react';
var JSONDataConverter = require('./JSONDataConverter');
import RadarPresentation from './radarPresentation'
import SelectGraph from './selectGraph'

class GraphContainer extends Component {
  constructor() {
    super()
    this.state = {
      graphType: 'radar'
    }
  }

  changeGraphType(graphType) {
    this.setState({
      graphType: graphType
    });
  }

  render() {
    switch (this.props.graphType) {
      case "radar":
        var graph = <RadarPresentation data={JSONDataConverter(this.props.data)} width={this.props.width} height={this.props.height}  onChange={this.changeGraphType}/>;
        break;
      case "timeSeries":
        //var graph = <RadarPresentation data={JSONDataConverter(this.props.data)} width={this.props.width} height={this.props.height}  onChange={this.changeGraphType}/>;
        var graph
        break;
      default:
        var graph

    }

    return (
      <div>
        <SelectGraph onChange={this.changeGraphType}/>
        { graph }
      </div>
    );
  }
}

export default GraphContainer;
