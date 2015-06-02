/**
 * Module dependencies.
 */

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(8081);
app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {

    socket.on('send', function (data) {
        io.sockets.emit('print', data);
    });

});

