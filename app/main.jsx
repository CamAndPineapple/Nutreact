import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './components/SearchContainer.jsx';
import BarChartContainer from './components/BarChartContainer.jsx';
import PieChartContainer from './components/PieChartContainer.jsx';
import Colors from './components/Colors.jsx';

export default class ComponentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    // remember to bind events to this
    // i.e. this. _handleClick = this. _handleClick.bind(this);
  }

  render() {
    return (
      <div style={container}>
          <SearchContainer />
          <BarChartContainer />
          <PieChartContainer />
      </div>
    // 3 separate components (search, graph, piechart)
    );

  }

}

// styles
const container = {
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  height: 350,
  backgroundColor: Colors.darkGray,

};



// render container component to #app div
ReactDOM.render(
    <ComponentContainer />,
    document.getElementById('app')
);
