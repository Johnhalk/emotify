import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class SelectGraph extends Component  {
  handleSelection = (eventKey, e) => {
    this.props.onChange(eventKey);
  }

  render(){
    let graphType = {
      radar: "Radar",
      positivity: "Time Series"
    }
    return (
      <div>
        <DropdownButton title={graphType[this.props.graphType]} id="dropdown-size-medium" onSelect={this.handleSelection}>
          <MenuItem eventKey="radar">Radar</MenuItem>
          <MenuItem eventKey="positivity">Time Series</MenuItem>
        </DropdownButton>
      </div>
    );
  };
}

export default SelectGraph;
