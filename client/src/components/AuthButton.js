import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AuthButton = ({ auth }) =>
  auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/auth/twitter">Login With Twitter</a>
  );

AuthButton.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.object.isRequired,
    PropTypes.string.isRequired
  ])
};

export default AuthButton;
