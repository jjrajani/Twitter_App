import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TwitterFeed extends Component {
  render() {
    return <div>{this.props.searchTerm}</div>;
  }
}

TwitterFeed.propTypes = {
  searchTerm: PropTypes.string
};

export default TwitterFeed;
