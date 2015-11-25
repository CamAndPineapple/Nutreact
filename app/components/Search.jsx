import React from 'react';
import Colors from './Colors.jsx';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: 'Enter Food Item',
    };

    this.handleSearchInputClick = this.handleSearchInputClick.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);

  }

  handleSearchInputClick() {
    this.setState({
      searchInput: '',
    });
  }

  handleSearchInputChange(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }


  render() {
    return (
        <input type="text" value={this.state.searchInput} onClick={this.handleSearchInputClick} onChange={this.handleSearchInputChange} />
    );
  }

};




// styles
const container = {
  flex: 1,
  backgroundColor: Colors.gray,
  margin: 25,
  borderRadius: 3,

};
