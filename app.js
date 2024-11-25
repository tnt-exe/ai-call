var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();
var headerCheck = require('./middlewares/headerCheck.mdw');
var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', headerCheck, indexRouter);

module.exports = app;
