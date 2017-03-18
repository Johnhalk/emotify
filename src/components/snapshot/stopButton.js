import React, { Component } from 'react';

class StopButton extends Component {

  handleClick = () => {
    this.props.onClick()
  }

  render = () =>{
    return <button type='button' onClick={this.handleClick}>Stop Capturing</button>
  }

}

export default StopButton
