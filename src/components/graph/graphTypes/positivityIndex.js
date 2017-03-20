import React from 'react';
import RTChart from 'react-rt-chart';
import './positivity.css';

const PositivityIndex = ({data, interval}) => {
  const SECONDS = 60;
  const MINUTES = 60;
  const MS = 1000;

  var chart = {
                axis: { y: { min: -1.0, max: 1.0 } },
                point: {show: true}
              };

  var initialData = [{ date: new Date(), positivity: 0}];
  var maxValues = ((SECONDS/(interval/MS))*MINUTES)

  return <RTChart fields={['positivity']} data={data} chart={chart} initialData={initialData} />
};

export default PositivityIndex;
