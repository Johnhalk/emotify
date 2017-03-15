import React, { Component } from 'react';
// import RadarChart, { Radar } from 'react-chartjs';

var RadarChart = require("react-chartjs").Radar;

class DataConverterContainer extends Component {
  getDatasetfromJsonData(jsonData){
    return jsonData[0].scores;
  };

  getLabels(dataset){
    return Object.keys(dataset)
  };

  getData(dataset){
    // probably need to loop through each label to get values in the proper order
    return Object.values(dataset)
  };

  chartData = (dataset) => {
      return {
        labels: this.getLabels(dataset),
        datasets: [{
            data: this.getData(dataset)
        }]
      }
  };


  render() {
    var dataset = this.getDatasetfromJsonData(this.props.jsonData);
    let chartData = this.chartData(dataset)
    return <Graph chartData={chartData} width={800} height={800}/>
  }
};



const Graph = ({chartData, width, height}) => {
  return <RadarChart data={chartData} width={width} height={height} />
};

export default DataConverterContainer;
