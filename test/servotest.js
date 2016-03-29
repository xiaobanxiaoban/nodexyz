var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi()
});

board.on("ready", function() {
    console.log("Connected");

    // Initialize the servo instance
    var a = new five.Servo({
        address: 0x40,
        controller: "PCA9685",
        pin: 0,
        range: [0, 180]
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

    //var move=function(){
    //    a.to(degree++);
    //    setTimeout(move,10);
    //}
    //move();


});