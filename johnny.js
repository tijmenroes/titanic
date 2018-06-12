


//hier begint de arduino code

var temporal = require("temporal");
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(11);

    var poepje = [
        {on: true, val: 3} ,
        {on: false, val: 1},
        {on: true, val: 1},
        {on: false, val: 1}
    ];

     for ( i = 0; i < poepje.length - 1; i++)
    {


        temporal.delay(1000, function() {
            var value = poepje[i].val;
            GetChar(poepje[i].val);
        })
    }

function GetChar(value) {
        {
            switch (value) {
                case 3:
                    console.log("3");

                    break;
                case 1:
                    console.log("11111");
                    led.on();
                    temporal.delay(500, function() {

                       led.off();

                    });

                    break;
                default:
                    console.log("def");
                    led.off(500);
                    break;
            }
        }

    }
});

