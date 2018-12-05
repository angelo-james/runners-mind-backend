const express = require('express');
const app = express();
const port = process.env.PORT || 3800;

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');
const morgan = require('morgan');

//MODELS
const users = require('./src/routes/user.routes');
const posts = require('./src/routes/post.routes');

app.use(bodyParser.json());
app.use(cors({
  exposedHeaders: ['authorization']
}));
app.use(morgan('dev'));

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then( () => console.log(`MongoDB is connected...`) )
  .catch( error => console.log(error) );

//ROUTES
app.use('/api/users', users);
app.use('/api/posts', posts);

//=================================================================
//Changed code
//=================================================================

app.all('*', (req, res, next) => res.sendStatus(404))

app.use((err, req, res, next) => {
  res.status(err.status).json(err)
})

//=================================================================

app.listen(port, () => {
  console.log(`You're listening on port ${port}...`);
})