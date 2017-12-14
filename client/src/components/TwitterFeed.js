import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweetItem } from './';

class TwitterFeed extends Component {
  renderHeader() {
    const { searchTerm } = this.props;
    return searchTerm ? (
      <h2>You searched for {searchTerm}</h2>
    ) : (
      <h2>Enter a Search to Get Started</h2>
    );
  }
  render() {
    const { tweets } = this.props;
    return (
      <div className="container">
        {this.renderHeader()}
        {tweets && (
          <ul>
            {tweets.map(t => {
              return <TweetItem tweet={t} key={t.id} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

TwitterFeed.propTypes = {
  searchTerm: PropTypes.string,
  tweets: PropTypes.array.isRequired
};

export default TwitterFeed;
