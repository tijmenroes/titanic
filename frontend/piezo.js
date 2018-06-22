var five = require("johnny-five"),
    board = new five.Board();

board.on("ready", function() {
    // Creates a piezo object and defines the pin to be used for the signal
    var piezo = new five.Piezo(3);

    // Injects the piezo into the repl
    board.repl.inject({
        piezo: piezo
    });

    // Plays a song
    piezo.play({
        song: [
            [ 698, 20 ], // Play frequency 698 for 1 beat
            [ 831, 2 ] // ...
        ]
    });

});