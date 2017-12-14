### Twitter App Server

A simple express app serving a Twitter Login and connections to the Twitter
Search API.

##### **Visit the [Live Demo](http://humdrum-twitter-app.herokuapp.com/)**

##### To get the server running, run the following commands in your terminal:

* `git clone https://github.com/jjrajani/Twitter_App.git'
* `cd server`
* Then either:
  * `npm run start` for **production**
  * `npm run server` for **development**

#### Routes

###### Auth Twiter Routes

* ###### GET /auth/twitter

  Kick off auth process. Uses passport to redirect user into Passport Twitter
  Auth Flow.

* ###### GET /twitter/callback
  Complete auth process. Twitter returns user to this route where passport picks
  up again to complete user auth.

###### Current User Routes

* ###### GET /api/current_user

  Get the current user. Returns `req.user`. `req.user` is attached by passport
  and is configured but the passportTwitter service.

* ###### GET /api/logout
  Get the current user. Returns `req.user`. `req.user` is attached by passport
  and is configured but the passportTwitter service.

###### Twitter Search Routes

* ###### POST /api/twitter-search
  Expects `req.body.term` to be a string. Sends query to
  `https://api.twitter.com/1.1/search/tweets.json` and returns the provided list
  of tweets.

#### Models

###### User Model

* twitterId: String
* username: String
