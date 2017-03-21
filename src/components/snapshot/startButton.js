import React, { Component } from 'react';

class StartButton extends Component {
  handleClick = () => {
    this.props.onClick()
  }

  render = () =>{
    return <button type='button' onClick={this.handleClick}>Start Capturing</button>
  }

}

export default StartButton
