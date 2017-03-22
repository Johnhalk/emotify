import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import SnapshotContainer from './snapshotContainer';

describe('Snapshot container', () => {

  it ('renders without crashing', () => {
    const div = document.createElement('div');
    var snapshotContainer = ReactDOM.render(<SnapshotContainer />, div)
    expect(snapshotContainer).toExist
  })


  it ('defaults buttonClicked to false', () => {
    const div = document.createElement('div');
    var snapshotContainer = ReactDOM.render(<SnapshotContainer />, div)
    expect(snapshotContainer.state.buttonClicked).toEqual(false)
  })

  it ('renders camera when button is clicked', () => {
    const div = document.createElement('div');
    var snapshotContainer = ReactDOM.render(<SnapshotContainer />, div)
    var test = snapshotContainer.setButtonClickedTrue = jest.genMockFunction ();
  })

});
