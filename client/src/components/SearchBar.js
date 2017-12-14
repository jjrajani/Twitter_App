import React, { Component } from 'react';

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
    console.log('submitting', this.state.term);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="term"
          value={this.state.term}
          placeholder="Serch Twitter"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default SearchBar;
