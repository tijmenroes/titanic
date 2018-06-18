


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
    var piezo = new five.Piezo(3);

    // Injects the piezo into the repl
    board.repl.inject({
        piezo: piezo
    });
    var led = new five.Led(11);
    io.on('connection', function (socket) {
        socket.on('chat message', function (msg) {

           console.log(msg);
           if(msg == "on"){
               console.log("STAAT AAN MAN");
               led.on();
               piezo.play({
                   song: [
                       [ 698, 20 ] // Play frequency 698 for 1 beat
                       ]
               });
           }
           else if (msg== "off"){
               console.log("STAAT UIT MAN");
               led.off();
               piezo.noTone();
           }
           else {
               console.log("lol");
           }

        })
    })
});

