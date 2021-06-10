"use strict";
var placeForCanvas = window.document.getElementById("place-for-canvas");
// console.log(placeForCanvas!.clientHeight);
// console.log(placeForCanvas!.offsetHeight);
// console.log(placeForCanvas!.scrollHeight);
var footer = window.document.getElementsByTagName("footer")[0];
// console.log("footer: " + footer?.offsetHeight);
var s = function (p) {
    var width = placeForCanvas.offsetWidth;
    /*let height = placeForCanvas!.offsetHeight - footer!.offsetHeight;*/
    var height = placeForCanvas.clientHeight;
    var size = 50;
    var color = "#82b74b";
    var round = 50;
    p.setup = function () {
        var canvas = p.createCanvas(width, height);
        canvas.parent(placeForCanvas);
        p.noStroke();
    };
    p.draw = function () {
        p.background(color);
        if (p.mouseIsPressed) {
            round = 0;
        }
        else {
            round = 50;
        }
        p.rect(width / 2 - size / 2, height / 2 - size / 2, size, size, round);
        p.rect(2, 2, size, size);
        p.rect(width - size - 2, height - size - 2, size, size);
    };
    p.mousePressed = function () { };
    p.windowResized = function () {
        console.log("window resized!!!");
        width = placeForCanvas.offsetWidth;
        height = placeForCanvas.clientHeight;
        p.resizeCanvas(width, height);
    };
};
new p5(s);
