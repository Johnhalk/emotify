import React, { Component } from 'react';
import ColourButton from './colourButton'
import colourConverter from '../data/coloursConverter';
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
    colourConverter(this.props.data)

    return (
      <div>
        <ColourButton onClick={ this.startColours } name={"Colour Mode On"}/>
        <ColourButton onClick={ this.stopColours } name={"Colour Mode Off"}/>
      </div>
    )
  }
}

export default ColoursContainer
