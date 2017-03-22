import React, { Component } from 'react';

import {callAPI} from './services/mcsEmotionApiTalker'

import './AppBody.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Modal from 'react-bootstrap/lib/Modal';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import SnapshotContainer from './components/snapshot/snapshotContainer'
import GraphContainer from './components/graph/graphContainer'
import ColoursContainer from './components/colours/coloursContainer'


// const {
//   Button,
//   Modal,
//   Nav,
//   NavItem
// } = ReactBootstrap;

class Sidebar extends React.Component {
	render() {
  	return (
    	<Modal className='Sidebar left' show={ this.props.isVisible } onHide={this.props.onHide}
      	 autoFocus keyboard
      >
      	<Modal.Header closeButton>
        	<Modal.Title>Sidebar Menu</Modal.Title>
        </Modal.Header>
      	<Modal.Body>
      		{ this.props.children }
        </Modal.Body>
      </Modal>
    );
  }
}



class AppBody extends Component {
  constructor(){
    super()
    this.state = {
      faceData: 'Awaiting input...',
      interval: 4000,
      height: 600,
      width: 600,
      index: 0,
      isVisible: false,
    };
  }

    updateModal(isVisible) {
    	this.state.isVisible = isVisible;
      this.forceUpdate();
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

    return (
      <div className="AppBody">
        <div className='Sidebar-demo'>
          <Button onClick={ () => this.updateModal(true) }>Display Modal Dialog</Button>
          <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
            <Nav>
              <NavItem href='#'>Item 1</NavItem>
              <NavItem href='#'>Item 2</NavItem>
              <NavItem href='#'>Item 3</NavItem>
              <NavItem href='#'>Item 4</NavItem>
              <NavItem href='#'>Item 5</NavItem>
            </Nav>
          </Sidebar>
        </div>
        <Grid className="container-fluid">
          <Row className="show-grid">
            <Col xs={6} md={4}>
              <SnapshotContainer onChange={this.getEmotionData} interval={this.state.interval} />
            </Col>
            <Col xs={12} md={8}>
              {graphContainer}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default AppBody;
