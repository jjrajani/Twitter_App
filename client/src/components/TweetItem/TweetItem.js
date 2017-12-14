import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TweetFavorite from './TweetFavorite';
import TweetUserName from './TweetUserName';
import TweetUserImg from './TweetUserImg';

class TweetItem extends Component {
  backgroundStyles = () => {
    const {
      profile_background_image_url,
      profile_background_color
    } = this.props.tweet.user;
    return profile_background_image_url
      ? { backgroundImage: `url(${profile_background_image_url})` }
      : { backgroundColor: `#${profile_background_color}` };
  };
  render() {
    const { profile_image_url, screen_name, url } = this.props.tweet.user;
    const { created_at, favorite_count, text } = this.props.tweet;
    return (
      <li style={this.backgroundStyles()} className="tweet list_item">
        <div className="content">
          <p>{text}</p>
        </div>
        <div className="right">
          <TweetUserImg src={profile_image_url} url={url} />
          <TweetUserName url={url} screenName={screen_name} />
        </div>
        <div className="bottom">
          <TweetFavorite favoriteCount={favorite_count} />
          <p>Tweeted on {moment(created_at).format('MMMM Do, YYYY')}</p>
        </div>
      </li>
    );
  }
}

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    favorite_count: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      url: PropTypes.string,
      screen_name: PropTypes.string.isRequired,
      profile_background_color: PropTypes.string.isRequired,
      profile_background_image_url: PropTypes.string,
      profile_image_url: PropTypes.string.isRequired
    })
  })
};

export default TweetItem;
