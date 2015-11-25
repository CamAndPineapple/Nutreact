import React from 'react';
import Colors from './Colors.jsx';

export default class PieChartContainer extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div style={container}>Pie</div>
    );
  }

};


const container = {
  flex: 1,
  backgroundColor: Colors.gray,
  margin: 25,
  borderRadius: 3,
};
