import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AuthButton extends Component {
  render() {
    return this.props.auth ? (
      <a href="/api/logout">Logout</a>
    ) : (
      <a href="/auth/twitter">Login With Twitter</a>
    );
  }
}

AuthButton.propTypes = {
  auth: PropTypes.object.isRequired
};

export default AuthButton;
