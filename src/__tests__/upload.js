import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import Upload from '../components/upload';

describe('Upload', () => {
  it('is renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Upload />, div);
  });

  it('renders a <button>', () =>{
    const upload = shallow(<Upload />);
    expect(upload.find('button')).toExist
  });
});
