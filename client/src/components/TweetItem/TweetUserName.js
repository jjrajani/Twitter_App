import React from 'react';
import PropTypes from 'prop-types';

const TweetUserName = ({ url, screenName }) => {
  return url ? (
    <a href={url} target="_blank">
      {screenName}
    </a>
  ) : (
    <p className="user_name">{screenName}</p>
  );
};

TweetUserName.propTypes = {
  url: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired
};

export default TweetUserName;
