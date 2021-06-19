"use strict";
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var svg = document.getElementById("my-picture");
// console.log("svg", svg);
// It's important to add an load event listener to the object,
// as it will load the svg doc asynchronously
svg.addEventListener("load", function () {
    // get the inner DOM of alpha.svg
    var svgDoc = svg.contentDocument;
    // console.log("svgDoc", svgDoc);
    // console.log("svgDoc.all", svgDoc!.all);
    // console.log("svgDoc.all[87]", svgDoc!.all[87]);
    // console.log("svgDoc.all.length", svgDoc!.all.length);
    // get the inner element by id
    var colorHat = svgDoc.getElementById("ColorHat");
    // console.log(colorHat);
    colorHat.setAttribute("style", "fill: rgb(" +
        getRandomInt(0, 255) +
        "," +
        getRandomInt(0, 255) +
        "," +
        getRandomInt(0, 255) +
        ")");
    // add behaviour
    colorHat.addEventListener("mousedown", function () {
        alert("You have clicked on me! Mammaaa!");
    }, false);
}, false);
