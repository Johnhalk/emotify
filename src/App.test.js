import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import App from './App';

describe('App', () =>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

describe('getEmotionData', ()=>{
  it('returns an error if image type is incorrect', ()=>{
    let image = "test"
    const div = document.createElement('div');
    let app = ReactDOM.render(<App />, div)
    expect(app.getEmotionData(image)).toBeUndefined()
  });
});

describe('faceData', ()=>{
  it('has a default value', ()=>{
    const div = document.createElement('div');
    let app = ReactDOM.render(<App />, div)
    expect(app.state.faceData).toEqual('Awaiting input...')
  });
});
