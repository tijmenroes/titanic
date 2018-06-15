


//mogelijk iets om te doen. Decode het op app.js en gooi alles in 1 string. Daarna ga je met een loop de string af per letter en waar een . of - is zal die iets moeten uitvoeren.
//daarna word een timer doorgestuurd naar de index

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){ //als er een connectie gemaakt word
    console.log('a user connected');
});

http.listen(3000, function(){ //wannneer de server start
    console.log('listening on *:3000');
});

 io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('Morse:: ' + msg);
    });
});



//hier begint de arduino code

var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(11);
    io.on('connection', function (socket) {
        socket.on('chat message', function () {

            function myLoop () {           //  create a loop function

                const counter = fullMorse[d].val * 1000;
                setTimeout(function () {    //  call a  setTimeout when the loop is called
                    d++;       //  your code here

                    haha = fullMorse[d].on + ": " + fullMorse[d].val;
                    document.getElementById("demo").innerHTML = haha;
                    if (fullMorse[d].on === true) {
                        $('.lol').css("opacity", "1");


                    } else {
                        $('.lol').css("opacity", "0");
                    }

                    //  increment the counter

                    if (d < fullMorse.length -1  ) {            //  als d nog niet klaar is, start de loop weer.
                        myLoop();             //  ..  again which will trigger another
                    }                        //  ..  setTimeout()
                }, counter)
            }

            myLoop();                      //  start the loop

        })
    })
});

