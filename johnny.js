
var five = require("johnny-five");

var board = new five.Board();


var temporal = require("temporal");
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
        console.log('message: ' + msg);
    });
});



//hier begint de arduino code
var poepje = [
    {on: true, val: 3} ,
        {on: false, val: 1},
    {on: true, val: 1},
               {on: false, val: 1}];

var i = 1;



//  start the loop
 board.on("ready", function() {
     var led = new five.Led(13);



    for(i=0;i<poepje.length -1; i++) {
        console.log(poepje[i].val);
        if (poepje[i].on === true) {
            led.fadeIn();
            console.log(poepje[i].val);

        } else {
            led.fadeOut();

        }


    }



 //io.on('connection', function (socket) {
 //socket.on('chat message', function (msg) {

  /*   function myLoop () {           //  create a loop function

         const counter = poepje[i].val * 1000;
         setTimeout(function () {    //  call a  setTimeout when the loop is called
             d++;       //  your code here
             if (poepje[i].on === true) {
                 led.toggle();



             } else {
                 led.toggle();
             }

             //  increment the counter

             if (i < poepje.length -1  ) {            //  als d nog niet klaar is, start de loop weer.
                 myLoop();             //  ..  again which will trigger another
             }                        //  ..  setTimeout()
         }, counter)
     }

     myLoop();
     */
     //});
 });
 //});

