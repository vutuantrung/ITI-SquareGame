var express = require('express'),
app = express(),
port = process.env.PORT || 3000,

//setup body parsing
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//set up http header
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  next();
});

//routes
var routes = require('./api/routes/Routes'); //importing route
routes(app); //register the route

//setup 404
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

  //run server
app.listen(port);


console.log('square game RESTful API server started on: ' + port);