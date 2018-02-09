var express = require('express'),
  app = express(),
  //set our port
  port = process.env.PORT || 8080, 
  mongoose = require('mongoose'),
  User = require('./models/user_model'),
  Card = require('./models/card_model'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var url = "mongodb://localhost:27017/smart_retro_db";
mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
  
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
      // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
      // Set to true if you need the website to include cookies in the requests sent
      // to the API (e.g. in case you use sessions)
      res.setHeader('Access-Control-Allow-Credentials', true);
  
      // Pass to next layer of middleware
      next();
  });
//GET ROUTES
var routes = require('./api/routes');

//REGISER OUR ROUTES
routes(app);

app.listen(port);
console.log('Magic happens on port: ' + port);





