const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('underscore');

const app = express();

app.get('/', (req, res) => {
  res.send('API home route');
});

app.listen(PORT, () => {
  console.log('Express listening on port ' + PORT + '!');
});
