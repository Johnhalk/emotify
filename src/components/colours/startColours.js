import React, { Component } from 'react';

class StartColours extends Component {
  render = () =>{
    return <button type='button' className='Start' onClick={this.props.onClick}>Colour Mode On</button>
  }
}

export default StartColours
