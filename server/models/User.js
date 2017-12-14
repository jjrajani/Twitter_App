const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  twitterId: String,
  username: String
});

mongoose.model('users', userSchema);
