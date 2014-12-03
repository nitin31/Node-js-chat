var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.sendFile('index.html', {"root": __dirname});
});

app.listen(app.get('port'));
