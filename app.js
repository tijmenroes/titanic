
var five = require("johnny-five");

//var board = new five.Board();


var temporal = require("temporal");

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.php');
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

 io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});



//hier begint de arduino code
/*
board.on("ready", function() {
    var led = new five.Led(13);
    io.on('connection', function (socket) {
        socket.on('chat message', function (msg) {

            led.toggle();
            temporal.delay(500, function() {
                led.toggle()
            });
              temporal.delay(1000, function() {
                led.toggle()
            });
            temporal.delay(1500, function() {
                led.toggle()
            });
            temporal.delay(2000, function() {
                led.toggle()
            });
            temporal.delay(2500, function() {
                led.toggle()
            });
            });
        })
    });
*/
