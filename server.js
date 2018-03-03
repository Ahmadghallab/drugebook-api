const PORT = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('underscore');
const db = require('./db.js');

const app = express();

app.get('/', (req, res) => {
  res.send('API home route');
});


db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port ' + PORT + '!');
  });
});
