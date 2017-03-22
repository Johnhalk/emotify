import React, { Component } from 'react';

class StopButton extends Component {
  render = () =>{
    return <button type='button' className='Stop' onClick={this.props.onClick}>Stop Capturing</button>
  }
}

export default StopButton
