import React from 'react';
import PropTypes from 'prop-types';

const TweetUserImg = ({ url, src }) => {
  return url ? (
    <a href={url} target="_blank">
      <img src={src} alt="User Profile Pic" />
    </a>
  ) : (
    <img src={src} alt="User Profile Pic" />
  );
};

TweetUserImg.propTypes = {
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default TweetUserImg;
