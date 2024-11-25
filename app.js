var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
