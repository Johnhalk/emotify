import React, { Component } from 'react';

class StartButton extends Component {
  render = () =>{
    return <button type='button' className='Start' onClick={this.props.onClick}>Start Capturing</button>
  }
}

export default StartButton
