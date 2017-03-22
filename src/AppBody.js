import React, { Component } from 'react';

import {callAPI} from './services/mcsEmotionApiTalker'

import './AppBody.css';

import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'

import SidebarPresentation from './sidebarPresentation'

import {Panel, Grid, Col, Row} from 'react-bootstrap'


class AppBody extends Component {
  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input...',
      interval: 4000,
      height: 600,
      width: 600,
    };
  }

  updateFaceData = (faceData) => {
    this.setState({
      faceData: faceData
    })
  }

  getEmotionData = (image) => {
    callAPI(image)
      .then(this.updateFaceData)
      .catch(console.log)
  }

  getFaceDataForGraph = () => {
    if (this.state.faceData !== 'Awaiting input...') {
       return <GraphContainer data={this.state.faceData} width={200} height={200} interval={this.state.interval} />
    } else {
      return (
        <div className="graphContainer">
          {this.state.faceData}
        </div>
      )
    }
  }

  getFaceDataForColour = () => {
    if (this.state.faceData !== 'Awaiting input...') {
       return <ColoursContainer data={this.state.faceData}/>
    }
  }

  render() {
    var graphContainer = this.getFaceDataForGraph()
    var colourContainer = this.getFaceDataForColour()

    const title = (
      <h3>Settings</h3>
    );



    return (
      <div className="wrapper">
          <div id="sidebar-wrapper">
            <Panel header={title} bsStyle="info">
              <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
            </Panel>
          </div>
          <div id="page-content-wrapper">
              <div class="page-content">
                  <Grid>
                      <Row>
                          <Col md="12">
                            sadsadsadas
                          </Col>
                      </Row>
                  </Grid>
              </div>
          </div>
      </div>
    );
  }
}

export default AppBody;
