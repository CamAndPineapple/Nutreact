import React from 'react';

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    
  }


  render() {
    return (
      <div style={container}>{this.props.title}</div>
    );
  }

};

// Props Validation
SearchContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
};

// Props Initialization
SearchContainer.defaultProps = {
  title: 'searchy',
};


// styles
const container = {
  flex: 1,
  backgroundColor: 'black',
  margin: 10,

};
