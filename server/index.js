const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // Express server assets
  app.use(express.static('client/build'));
  // Serve index.html by default
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    );
  });
}

app.get('/', (req, res) => {
  console.log('twitter app base', req.query);
  res.send('Twitter API Integration');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App Listening on PORT 5000');
});
