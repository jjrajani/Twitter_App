import React from 'react';
import PropTypes from 'prop-types';

const TweetHeader = ({ url, screenName }) => {
  return url ? (
    <a href={url} target="_blank">
      {screenName}
    </a>
  ) : (
    <p>{screenName}</p>
  );
};

TweetHeader.propTypes = {
  url: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired
};

export default TweetHeader;
