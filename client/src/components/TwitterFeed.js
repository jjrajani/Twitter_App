import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweetItem } from './';

class TwitterFeed extends Component {
  render() {
    const { searchTerm, tweets } = this.props;
    return (
      <div>
        {!searchTerm && <h1>Enter a Search to Get Started</h1>}
        {searchTerm && <h1>You searched for {searchTerm}</h1>}
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
