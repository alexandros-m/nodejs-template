var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3000;

//necessary to use linked css and javscript files on frontend
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html');
});

//io.emit('test_server', 'this is server talking');
//socket.emit('test', 'DOOOOOOOOOnt');

io.on('connection', function(socket) {
    socket.on('test_client', function(test) {
        console.log(test)
    });
    socket.emit('test_server', 'this is the server talking');
});

http.listen(port, function(){});
