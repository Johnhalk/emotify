import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
var  mcsEmotionApiTalker = require ('./mcsEmotionApiTalker');
// import {callAPI} from './mcsEmotionApiTalker'

describe('callAPI', function(){

  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json: function() {
            return {Id: '1234'}
          }
        });
      });
      return p;
    });
  });

  it("callAPI", async function() {
    const response = await mcsEmotionApiTalker.callAPI('foo');
    console.log(response)
    expect(response).toBe({"Id": "1234"});
  });
});
