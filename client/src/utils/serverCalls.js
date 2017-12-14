import axios from 'axios';

const fetchCurrentUser = async () => {
  const res = await axios.get('/api/current_user');

  return res.data;
};

const searchTwitter = async term => {
  const res = await axios.post('/api/twitter-search', { term });

  return res.data.tweets.statuses;
};

export { fetchCurrentUser, searchTwitter };
