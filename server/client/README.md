### Twitter App Client

A simple react app for Searching Twitter. Contains a Twitter Login and Search
Bar. Searching provides a list of tweets matching the given search parameters.

##### **Visit the [Live Demo](http://humdrum-twitter-app.herokuapp.com/)**

##### To get the client running, run the following commands in your terminal:

* `git clone https://github.com/jjrajani/Twitter_App.git'
* `cd server/client`
* `npm run start`

##### To run client tests:

* `npm run test`

#### Proxies

* `/api/*: { target: "https://localhost:5000 }`
* `/auth/*: { target: "https://localhost:5000 }`
