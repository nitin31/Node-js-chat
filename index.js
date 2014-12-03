var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.sendFile('index.html', {"root": __dirname});
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

});

app.listen(app.get('port'));
