import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
import {updateColour} from './lifxAPI'
import {togglePower} from './lifxAPI'

describe ('lifxAPI', function(){
  beforeEach(function() {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          status: '207',
        });
      });
      return p;
    });
  });
  it('togglePower', async function() {
    const response = await togglePower();
    expect(response).toEqual({"Id": "123", "ok": true, "status": "207"});
  });

    it('updateColour', async function() {
      let color = {
        hue: 0,
        saturation: 100,
        brightness: 50,
        type: "red"
      }
      const response = await updateColour(color);
      expect(response).toEqual({"Id": "123", "ok": true, "status": "207"});
    });
  });
