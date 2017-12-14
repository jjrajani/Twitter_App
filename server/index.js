const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

/* Models */
require('./models/User');
/* Twitter Auth Route */
require('./routes/authTwitterRoutes')(app);
/* Twitter Search Route */
require('./routes/twitterSearchRoute')(app);

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
  res.send('Twitter API Integration');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('App Listening on PORT 5000');
});
