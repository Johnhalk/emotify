import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import {positiveIndexer}  from './indexer'

describe('positiveIndexer', ()=> {
  it('creates a positivity index', ()=>{
    let averageEmotions = {"anger": 0.08077703189702896, "contempt": 0.01471538897610642, "disgust": 0.11032597376841269, "fear": 0.13458586104152429, "happiness": 0.17748477807353502, "neutral": 0.1194413753618961, "sadness": 0.17306394622506927, "surprise": 0.1896056243283232}
    let positivity = -0.15919970572895245
    expect(positiveIndexer(averageEmotions)).toEqual(positivity)
  });
});
