
var five = require("johnny-five");

//var board = new five.Board();


var temporal = require("temporal");

var morse = require('morse');

//mogelijk iets om te doen. Decode het op app.js en gooi alles in 1 string. Daarna ga je met een loop de string af per letter en waar een . of - is zal die iets moeten uitvoeren.
//daarna word een timer doorgestuurd naar de index

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
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
