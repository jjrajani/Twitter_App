import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.term.length > 0) {
      this.props.onSubmit(this.state.term);
    }
  };
  render() {
    return (
      <div className="search_bar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            name="term"
            value={this.state.term}
            placeholder="Search Twitter"
            onChange={this.handleChange}
            id="twitterSearchTerm"
          />
          <input type="submit" value="Submit" id="submitTwitterSearch" />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
