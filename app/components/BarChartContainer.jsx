import React from 'react';
import { BarChart } from 'react-d3';

export default class BarChartContainer extends React.Component {
  constructor(props) {
    super(props);

  }


render() {
  return (

      <div style={container}>
        <BarChart
          style={barchart}
          data={barData}
          width={300}
          height={200}
          fill={'#3182bd'}
          backgroundColor={'#fff'}
          title='Bar Chart'
          yAxisLabel='% of Total Calories'
          xAxisLabel='Nutrients'
          />
      </div>

  );
}

};

const barData = [
  {
    'name': 'Series A',
    'values': [
      { 'x': 'Calories', 'y':  91},
      { 'x': 'Protein', 'y': 61},
      { 'x': 'Fat', 'y':  21},
      { 'x': 'Carbs', 'y':  41},
      { 'x': 'Sodium', 'y':  81},

    ],
  },
];

const Colors = {
  white: '#fff',
  black: '#000',
};

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 2,
  backgroundColor: Colors.black,
  margin: 10,
};

const barchart = {
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: Colors.white,
  height: 220,
  width: 600,
};
