import React from 'react';
import PropTypes from 'prop-types';

const TweetFavorite = ({ favorite_count }) => {
  return favorite_count > 0 ? (
    <p>
      <i className="fa fa-heart" aria-hidden="true" /> {favorite_count}
    </p>
  ) : null;
};

TweetFavorite.propTypes = {
  favorite_count: PropTypes.number.isRequired
};

export default TweetFavorite;
