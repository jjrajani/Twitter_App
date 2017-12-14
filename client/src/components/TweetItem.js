import React from 'react';
import PropTypes from 'prop-types';

const TweetItem = ({ tweet }) => <div>TweetItem</div>;

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    favorite_count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      url: PropTypes.string,
      screen_name: PropTypes.string.isRequired,
      profile_background_color: PropTypes.string,
      profile_background_img_url: PropTypes.string,
      profile_image_url: PropTypes.string
    })
  })
};
// tweet.created_at;
// tweet.favorite_count;
// tweet.text;
// tweet.user.url;
// tweet.user.screen_name;
// tweet.user.profile_background_color;
// tweet.user.profile_background_img_url;
// tweet.user.profile_image_url;
export default TweetItem;
