var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");

//Route files
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// HTTP request logger middleware for node.js (morgan)
app.use(logger('dev'));

// This is to allow our api for cross-origin resource sharing (To communicate with front end. It is in another server)
app.use(cors( {
  origin: ["http://localhost:3002"],
  methods : ["GET", "POST","PUT","DELETE"], // The methods that we will use
  credentials: true // Allow cookie to be enabled
}));

// This is to allow our api for parsing json
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json());


// This is to allow our api to receive data from client app(front end)
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


//save cookie
app.use(session({
  key: "user",
  secret: "database_project",
  resave: false,
  saveUninitialized: false,
  cookie: { 
    expires: 1000 * 60 * 60 * 24, // After 24 hours
  }
}))


// Built in middleware to serve static files such as images, CSS files, and JavaScript files (express.static)
app.use(express.static(path.join(__dirname, 'public')));


// Redirect to routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
