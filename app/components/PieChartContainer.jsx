import React from 'react';

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
  backgroundColor: 'black',
  margin: 10,

};
