var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.sendFile('index.html', {"root": __dirname});
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
});

app.listen(app.get('port'));
