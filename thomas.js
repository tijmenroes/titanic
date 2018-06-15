


//hier begint de arduino code

var temporal = require("temporal");
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    var led = new five.Led(11);

    var fullMorse = [
        {on: false, val: 1},
        {on: true, val: 3},
        {on: false, val: 1},
        {on: true, val: 1},
        {on: false, val: 1}
    ];
    console.log(fullMorse);
    showMorse(fullMorse);


    function showMorse(morse) {
        console.log("start morse");
        for (var i = 0; i < morse.length; i++) {

            console.log(morse[i]);

            if (morse[i].on === true) {
                console.log("on");
                led.on();
            }
            else if (morse[i].on === false) {
                console.log("off");
                led.off();
            }
            else{
                console.log("error")

            }
            sleep(morse[i].val * 1000)
        }
        led.on();
    }

    function sleep(milliseconds) {
        console.log("start sleep");
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                console.log("wakeing up");
                break;
            }
        }
    }
});
