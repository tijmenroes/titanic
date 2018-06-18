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

    // Plays the same song with a string representation
    piezo.play(five.Piezo.Notes.d5, 5000);
}); // Play note d5 for 1 second
        // song is composed by a string of notes
        // a default beat is set, and the default octave is used
        // any invalid note is read as "no note"




