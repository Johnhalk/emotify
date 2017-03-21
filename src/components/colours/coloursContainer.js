import React, { Component } from 'react';
import StartColours from './startColours'
import StopColours from './stopColours'
import ColoursPresentation from './coloursPresentation';
import {togglePower} from '../../services/lifxAPI'


class ColoursContainer extends Component {
  constructor() {
    super()
    this.state = {
      colourMode: false,
    }
  }

  startColours = () => {
    this.setState({colourMode: true})
    togglePower()
  }

  stopColours = () => {
    this.setState({colourMode: false})
    togglePower()
  }

  render = () => {
    if (this.state.colourMode) {
      var colours = <ColoursPresentation data={this.props.data}/>
    } else {
      var colours;
    }

    return (
      <div>
        <StartColours onClick={ this.startColours }/>
        <StopColours onClick={ this.stopColours }/>
        {colours}
      </div>
    )
  }
}

export default ColoursContainer
