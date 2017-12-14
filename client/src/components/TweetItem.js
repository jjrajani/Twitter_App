import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class TweetItem extends Component {
  backgroundStyles = () => {
    const {
      profile_background_image_url,
      profile_background_color
    } = this.props.tweet.user;
    return profile_background_image_url
      ? {
          backgroundImage: `url(${profile_background_image_url})`
        }
      : {
          backgroundColor: `#${profile_background_color}`
        };
  };
  renderHeader = () => {
    const { url, screen_name } = this.props.tweet.user;
    return url ? (
      <a href={url} target="_blank">
        {screen_name}
      </a>
    ) : (
      <p>{screen_name}</p>
    );
  };
  renderFavorite = () => {
    const { favorite_count } = this.props.tweet;
    return favorite_count > 0 ? (
      <p>
        <i className="fa fa-heart" aria-hidden="true" /> {favorite_count}
      </p>
    ) : null;
  };
  render() {
    const { profile_image_url } = this.props.tweet.user;
    const { created_at, text } = this.props.tweet;
    return (
      <li style={this.backgroundStyles()}>
        <div className="header">
          {this.renderHeader()}
          <p>Tweeting Since {moment(created_at).format('MMMM Do, YYYY')}</p>
          {this.renderFavorite()}
        </div>
        <div className="content">
          <img src={profile_image_url} alt="User Profile Pic" />
          <p>{text}</p>
        </div>
      </li>
    );
  }
}

TweetItem.propTypes = {
  tweet: PropTypes.shape({
    created_at: PropTypes.string.isRequired, // --
    favorite_count: PropTypes.number.isRequired, //--
    text: PropTypes.string.isRequired, //--
    user: PropTypes.shape({
      url: PropTypes.string, // //--
      screen_name: PropTypes.string.isRequired, // --
      profile_background_color: PropTypes.string.isRequired,
      profile_background_image_url: PropTypes.string, //
      profile_image_url: PropTypes.string.isRequired // --
    })
  })
};

export default TweetItem;
