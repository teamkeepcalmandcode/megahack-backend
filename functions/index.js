var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')({origin: true});
const functions = require('firebase-functions');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var campaignsRouter = require('./routes/campaigns');
var partnersRouter = require('./routes/partners');
var feedbackRouter = require('./routes/feedback');

var app = express();

mongoose.connect('mongodb+srv://root:root123@cluster0-wlw41.mongodb.net/week10',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors);
app.options('*', cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/campaigns', campaignsRouter);
app.use('/api/partners', partnersRouter);
app.use('/api/feedbacks', feedbackRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


exports.app = functions.https.onRequest(app);
