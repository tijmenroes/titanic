


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

    });
});



//hier begint de arduino code

var five = require("johnny-five"); //require de johnny five library

var board = new five.Board(); //het arduino board

board.on("ready", function() { //wanneer het board ready is
    var piezo = new five.Piezo(3); //speaker is op pin 3


    board.repl.inject({  // Inject de piezo in het board, zodat je het kan gebruiken
        piezo: piezo
    });
    var led = new five.Led(11); //led pin is 11
    io.on('connection', function (socket) { //als er een connectie met de socket is gemaakt
        socket.on('chat message', function (msg) { // wanneer er een socket message binnenkomt volg het onderstaande uit.

           console.log(msg);
           if(msg == "on"){ //wanneer de message die je binnenkrijgt on is
                 led.on();
               piezo.play({
                   song: [
                       [ 698, 150 ] //Speel een frequentie af op de piezo, voor 150 beats (beats staat nu op 150 per min)
                       ]
               });
           }
           else if (msg== "off"){ //wanneer de message off is
               console.log("STAAT UIT MAN");
               led.off();
               piezo.noTone(); //Piezo stopt, queue stopt ook
           }
           else {
               console.log("lol");
           }

        })
    })
});

