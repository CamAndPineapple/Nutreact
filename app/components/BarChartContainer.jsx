import React from 'react';

export default class BarChartContainer extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div style={container}>Bar</div>
    );
  }

};


const container = {
  flex: 2,
  backgroundColor: 'black',
  margin: 10,

};
