const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(config.mongoCloudURI, {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log('success');
});

const app = express();

require('./routes/authRoutes')(app);

app.listen(5000);