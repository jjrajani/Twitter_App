import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweetItem } from './';

class TwitterFeed extends Component {
  render() {
    const { tweets } = this.props;
    return (
      <div className="container twitter_feed">
        {!tweets.length && <h2>Enter a Search to Get Started</h2>}
        {tweets && (
          <ul className="list">
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
  tweets: PropTypes.array.isRequired
};

export default TwitterFeed;
