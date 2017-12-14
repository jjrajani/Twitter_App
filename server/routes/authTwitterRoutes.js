const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');
module.exports = app => {
  /* Kick Off Twitter Auth Process */
  app.get(
    '/auth/twitter',
    passport.authenticate('twitter', {
      scope: ['public_profile', 'email']
    })
  );

  /* Complete Twitter Auth Process */
  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    async (req, res) => {
      let user = await User.findById(req.user._id);

      await user.save();
      res.redirect('/');
    }
  );
};
