const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://lotochecker.db:27017/api',
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   });
requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(PORT, HOST);