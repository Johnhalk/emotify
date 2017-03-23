import React, { Component } from 'react';

class ColourButton extends Component {
  render = () =>{
    return <button type='button' onClick={this.props.onClick}>{this.props.name}</button>
  }
}

export default ColourButton
