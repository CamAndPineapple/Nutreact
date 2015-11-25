import React from 'react';
import { BarChart } from 'react-d3';
import Colors from './Colors.jsx';

export default class BarChartContainer extends React.Component {
  constructor(props) {
    super(props);

  }


render() {
  return (

      <div style={container}>
        <BarChart
          data={barData}
          width={500}
          height={200}
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



const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 2,
  backgroundColor: Colors.gray,
  marginTop: 15,
  marginBottom: 15,
};
