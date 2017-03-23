import React, { Component } from 'react';

class StopColours extends Component {
  render = () =>{
    return <button type='button' className='Stop' onClick={this.props.onClick}>Colour Mode Off</button>
  }
}

export default StopColours
