import axios from 'axios';

const fetchCurrentUser = async () => {
  const res = await axios.get('/api/current_user');

  return res.data;
};

const searchTwitter = async term => {
  const res = await axios.get('/api/twitter-search', { term });

  return res.data;
};

export { fetchCurrentUser, searchTwitter };
