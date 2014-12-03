var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get('/', function(request, response) {
  response.sendFile('index.html', {"root": __dirname});
});

app.set('port', (process.env.PORT || 3000));

io.on('connection', function(socket){
  console.log('a user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
  socket.on('typing',function(typingUser){
    console.log(typingUser);
    io.emit('istyping', typingUser);
  });
  socket.on('stoppedtyping', function(user){
    console.log(user);
    io.emit('stoptyping', typingUser);
  });
});

http.listen(app.get('port'));

