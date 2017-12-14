import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwitterFeed extends Component {
  render() {
    console.log(this.props.tweets);
    return <div>{this.props.searchTerm}</div>;
  }
}

TwitterFeed.propTypes = {
  searchTerm: PropTypes.string,
  tweets: PropTypes.array.isRequired
};

export default TwitterFeed;
