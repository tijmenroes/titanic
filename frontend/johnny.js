


//hier begint de arduino code

var temporal = require("temporal");
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(11);

    var fullMorse = [
        {on: false, val: 1} ,
        {on: true, val: 3} ,
        {on: false, val: 1},
        {on: true, val: 1},
        {on: false, val: 1}
    ];
    console.log(fullMorse);



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
    /*
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
        */
});

