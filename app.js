var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

app.set('port', (process.env.PORT || 5000));

app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.send('/index')
})
app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());

setupController(app)
apiController(app)

app.listen(port);
