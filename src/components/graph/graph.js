import React, { Component } from 'react';
import RadarChart, { Radar } from 'react-chartjs';
// var RadarChart = require("react-chartjs").Radar;


class Graph extends Component {
  constructor(jsonData){
    super();
    this.setState( { dataset: this.getDatasetfromJsonData(this.props.jsonData)})
  }
  
  getDatasetfromJsonData(jsonData){
    return jsonData[0].scores;
  };
  //
  // getLabels(){
  //   return Object.keys(this.state.dataset)
  // };
  //
  // getData(){
  //   // probably need to loop through each label to get values in the proper order
  //   return Object.values(this.state.dataset)
  // };
  //
  // chartData(){
  //     return {
  //       labels: this.getLabels(),
  //       datasets: [{
  //           data: this.getData()
  //       }]
  //     }
  // };

  render() {
    return <p>{JSON.stringify(this.props.jsonData)}</p>
    // return <RadarChart data={this.chartData()} width={600} height={700}/>
  }
};

export default Graph;
