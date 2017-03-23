import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class StartButton extends Component {
  render = () =>{
    return <Button bsStyle="primary" bsSize="large" block  onClick={this.props.onClick}>Start Capturing</Button>
  }
}

export default StartButton
