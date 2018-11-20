const express = require('express');
const app = express();
const port = 3800;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./src/routes/user.routes');

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then( () => console.log(`MongoDB is connected...`) )
  .catch( error => console.log(error) );

app.use('/api/users', users);

app.listen(port, () => {
  console.log(`You're listening on port ${port}...`);
})