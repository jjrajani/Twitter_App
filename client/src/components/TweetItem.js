import React from 'react';
import PropTypes from 'prop-types';

const TweetItem = ({ tweet }) => {
  const {
    profile_background_color,
    profile_background_img_url,
    profile_image_url,
    screen_name,
    url
  } = tweet.user;
  const { created_at, favorite_count, text, user } = tweet;
  console.log(profile_background_color);
  return (
    <li>
      <div className="header">
        {url && (
          <a href={url} target="_blank">
            {screen_name}
          </a>
        )}
        {!url && <p>{screen_name}</p>}
        <p>Tweeting Since {created_at}</p>
        <p>heart {favorite_count}</p>
      </div>
      <div
        className="content"
        style={{
          backgroundColor: `#${profile_background_color}`,
          backgroundImage: `url${profile_background_img_url}`
        }}
      >
        <img src={profile_image_url} alt="User Profile Pic" />
        <p>{text}</p>
      </div>
    </li>
  );
};

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    created_at: PropTypes.string.isRequired, // --
    favorite_count: PropTypes.number.isRequired, //--
    text: PropTypes.string.isRequired, //--
    user: PropTypes.shape({
      url: PropTypes.string, // //--
      screen_name: PropTypes.string.isRequired, // --
      profile_background_color: PropTypes.string.isRequired,
      profile_background_img_url: PropTypes.string, //
      profile_image_url: PropTypes.string.isRequired // --
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
