import React, { Component } from 'react';

class StartColours extends Component {
  handleClick = () => {
    this.props.onClick()
  }

  render = () =>{
    return <button type='button' onClick={this.handleClick}>Colour Mode On</button>
  }
}

export default StartColours
