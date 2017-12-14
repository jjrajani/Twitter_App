import React from 'react';
import PropTypes from 'prop-types';

const TweetFavorite = ({ favoriteCount }) => {
  return favoriteCount > 0 ? (
    <p>
      <i className="fa fa-heart" aria-hidden="true" /> {favoriteCount}
    </p>
  ) : null;
};

TweetFavorite.propTypes = {
  favoriteCount: PropTypes.number.isRequired
};

export default TweetFavorite;
