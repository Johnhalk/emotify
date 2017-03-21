import React, { Component } from 'react';

class StopColours extends Component {
  handleClick = () => {
    this.props.onClick()
  }

  render = () =>{
    return <button type='button' onClick={this.handleClick}>Colour Mode Off</button>
  }
}

export default StopColours
