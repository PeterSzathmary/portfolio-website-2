"use strict";
var nav = window.document.getElementsByClassName("nav")[0];
console.log(nav.offsetHeight);
console.log(typeof nav);
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
    var count = 50;
    var size = 20;
    var textSize;
    p.setup = function () {
        var canvas = p.createCanvas(width, height);
        canvas.parent(placeForCanvas);
        p.noStroke();
        for (var i = 0; i < count; i++) {
            var x = p.random(size, width - size * 2);
            var y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }
        if (width >= 480)
            textSize = 30;
        else
            textSize = 22;
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(textSize);
        console.log(rects);
    };
    p.draw = function () {
        p.background(20);
        p.fill("rgba(255,255,255,0.25)");
        p.text("Tap above the half to add rects.\nBelow half to remove.", width / 2, height / 2);
        for (var i = 0; i < rects.length; i++) {
            rects[i].draw();
            rects[i].move();
            rects[i].checkBounds();
        }
    };
    p.mousePressed = function () {
        if (p.mouseY < height / 2 && p.mouseY > 0) {
            var x = p.random(size, width - size * 2);
            var y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }
        else if (p.mouseY > height / 2 && p.mouseY < height)
            rects.pop();
    };
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
    p.touchStarted = function (e) {
        var yPos = e.targetTouches[0].clientY - nav.offsetHeight;
        if (yPos < height / 2 && yPos > 0) {
            var x = p.random(size, width - size * 2);
            var y = p.random(size, height - size * 2);
            rects.push(new Rect(x, y, size, p));
        }
        else if (yPos > height / 2 && yPos < height)
            rects.pop();
        // console.log("nav.offsetHeight", nav.offsetHeight);
        // console.log("e.targetTouches[0].clientX", e.targetTouches[0].clientX);
        // console.log("e.targetTouches[0].clientY", e.targetTouches[0].clientY);
        // console.log("e.touches", e.touches.length);
        // console.log("e.targetTouches[0]", e.targetTouches[0]);
    };
    p.touchEnded = function (e) { };
};
new p5(s);
