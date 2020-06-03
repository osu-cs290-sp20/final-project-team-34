var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var fs = require('fs');

var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var port = process.env.PORT || 3000;

var logObjects = JSON.parse(fs.readFileSync('logs.json', 'utf8'));

app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/logs', function (req, res) {
  res.render('logsPage', {
    logs: logObjects
  });
});

app.post('/api/logs/add', function (req, res) {
  var obj = req.body;
  logObjects.push(obj);

  /* Writing Logs To File
  fs.writeFile('logs.json', logObjects, (err) => {
    if(err) {
      console.log(err);
    }
    console.log("Post Successful!");
  })
  */

  res.redirect('/');
});

app.get('/create', function (req, res) {
  res.render('createPage', {
    logNumber: logObjects.length+1
  });
});

app.get('*', function (req, res) {
  res.render('404')
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
