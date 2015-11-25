// Dependencies
import React from 'react';

// Components
import Search from './Search.jsx';


// Global styles
import Colors from './Colors.jsx';

export default class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }


  render() {
    return (
      <div style={container}>
        <div style={containerHeader}> Search </div>
        <form>
          <span><label>Food:</label><Search /></span>
          <span><label>TDEE:</label></span>
        </form>
      </div>
    );
  }

};

// Props Validation
SearchContainer.propTypes = {
  searchInput: React.PropTypes.string.isRequired,
  tdeeInput: React.PropTypes.number.isRequired,
};

// Props Initialization
SearchContainer.defaultProps = {
  searchInput: 'Enter Food Item',
  tdeeInput: 2000,
};


// styles
const container = {
  flex: 1,
  backgroundColor: Colors.gray,
  margin: 25,
  borderRadius: 3,

};

const containerHeader = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
  backgroundColor: Colors.purple,
  fontSize: 24,
};
