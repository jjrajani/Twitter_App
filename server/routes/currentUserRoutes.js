module.exports = app => {
  /* Get current User */
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
  //
  /* Logout User */
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
