import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import {convertToBlob} from './imageEncodingConverter'

describe('convertToBlob', ()=>{
  it('convets a image from base64 to a blob', () =>{
    let base64 = "data:image/png;base64, test"
  expect(convertToBlob(base64)).toBeInstanceOf(Blob)
  })
});
