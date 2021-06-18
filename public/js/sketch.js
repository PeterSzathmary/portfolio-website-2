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
    var rects = [];
    var count = 5;
    var size = 20;
    p.setup = function () {
        var canvas = p.createCanvas(width, height);
        canvas.parent(placeForCanvas);
        p.noStroke();
        for (var i = 0; i < count; i++) {
            var x = p.random(size, width - size * 2);
            var y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }
        console.log(rects);
    };
    p.draw = function () {
        p.background(20);
        for (var i = 0; i < rects.length; i++) {
            rects[i].draw();
            rects[i].move();
            rects[i].checkBounds();
        }
    };
    p.mousePressed = function () { };
    p.windowResized = function () {
        rects = [];
        for (var i = 0; i < count; i++) {
            var x = p.random(size, width - size * 2);
            var y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }
        console.log("window resized!!!");
        width = placeForCanvas.offsetWidth;
        height = placeForCanvas.clientHeight;
        p.resizeCanvas(width, height);
    };
    p.keyPressed = function () {
        if (p.keyCode === p.UP_ARROW) {
            var x = p.random(size, width - size * 2);
            var y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }
        else if (p.keyCode === p.DOWN_ARROW) {
            if (rects.length > 0) {
                rects.pop();
            }
        }
    };
};
new p5(s);
