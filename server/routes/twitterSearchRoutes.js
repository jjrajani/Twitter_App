const request = require('request');
const keys = require('../config/keys');
const qs = require('querystring');

const oauth = {
  callback: 'http://localhost:5000/api/twitter-auth-callback/',
  consumer_key: keys.twitterConsumerKey,
  consumer_secret: keys.twitterConsumerSecret,
  access_token: keys.twitterAccessToken,
  access_token_secret: keys.twitterAccessTokenSecret
};

const searchTwitterURL =
  'https://api.twitter.com/1.1/search/tweets.json?lang=en&result_type=mixed&include_entities=false&count=100';

module.exports = app => {
  /* Search Twitter */
  app.post('/api/twitter-search', (req, res) => {
    console.log('req', req.body);
    let query = {
      q: req.body.term
    };
    let queryString = qs.stringify(query);
    console.log('queryString', queryString);
    let queryUrl = `${searchTwitterURL}&${queryString}`;
    request.get({ url: queryUrl, oauth, json: true }, (e, r, body) => {
      console.log('twitter search', body);
      res.send({ tweets: body });
    });
  });
};
