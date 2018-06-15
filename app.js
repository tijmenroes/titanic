


//mogelijk iets om te doen. Decode het op app.js en gooi alles in 1 string. Daarna ga je met een loop de string af per letter en waar een . of - is zal die iets moeten uitvoeren.
//daarna word een timer doorgestuurd naar de index

var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    app.use(express.static(__dirname + '/img'));

});

io.on('connection', function(socket){ //als er een connectie gemaakt word
    console.log('a user connected');
});

http.listen(3000, function(){ //wannneer de server start
    console.log('listening on *:3000');
});

 io.on('connection', function(socket){
    socket.on('chat message', function(msg){
    //    console.log('Morse:: ' + msg);
    });
});



//hier begint de arduino code

var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(11);
    io.on('connection', function (socket) {
        socket.on('chat message', function (msg) {

           console.log(msg);
           if(msg == "on"){
               console.log("STAAT AAN MAN");
               led.on();
           }
           else if (msg== "off"){
               console.log("STAAT UIT MAN");
               led.off();
           }
           else {
               console.log("lol");
           }

        })
    })
});

