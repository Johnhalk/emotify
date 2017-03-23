import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const app = render(<App id='root' />);
  expect(app).toExist
});
