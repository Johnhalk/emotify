import React from 'react';
import ReactDOM from 'react-dom';
import RTChart from 'react-rt-chart';
import { shallow, mount, render } from 'enzyme';
import PositivityIndex from './positivityIndex';

describe('PositivityIndex', () => {
  it('uses the data to render positivity chart ', () => {
    var data = -0.0038934504705600004
    var chart = {
                  axis: { y: { min: -1.0, max: 1.0 } },
                  point: {show: true}
                };
    var initialData = [{ date: new Date(), positivity: 0}];

    const graph = render(<RTChart fields={['positivity']} data={data} chart={chart} initialData={initialData} />)
    expect(graph).toExist
  });

});
