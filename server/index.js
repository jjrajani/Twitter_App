const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

/* Models */
require('./models/User');

/* Connect mongoose to MongoDB on mLab */
mongoose.connect(keys.mongoURI);

const app = express();

app.use(cors());

app.use(
  // 24 hr day session
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(bodyParser.json());

/* Twitter Auth Service */
require('./services/passportTwitter');
/* Current User Routes */
require('./routes/currentUserRoutes')(app);
/* Twitter Auth Routes */
require('./routes/authTwitterRoutes')(app);
/* Twitter Search Routes */
require('./routes/twitterSearchRoutes')(app);

// if (process.env.NODE_ENV === 'production') {
// Express server assets
app.use(express.static('client/build'));
// Serve index.html by default
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// }
//
// app.get('/', (req, res) => {
//   res.send('Twitter API Integration');
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App Listening on PORT 5000');
});
