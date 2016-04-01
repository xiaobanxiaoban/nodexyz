var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});

board.on("ready", function() {

    // Initialize the servo instance
    var a = new five.Servo({
        address: 0x40,
        controller: "PCA9685",
        pin: 0,
        range: [45, 135]
    });

    var b = new five.Servo({
        address: 0x40,
        controller: "PCA9685",
        pin: 1,
        range: [0, 180]
    });


    var degree=90;
    a.sweep();
    b.sweep();



});